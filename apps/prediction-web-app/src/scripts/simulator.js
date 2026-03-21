/**
 * Static Bracket Simulator & API replacement
 * 
 * Client-side bracket simulation using pre-exported JSON data.
 * Replaces the FastAPI backend for the static GitHub Pages deployment.
 */

let _menData = null;
let _womenData = null;
let _allPredictions = null; // full multi-model data
let _predictions = null;   // active model's predictions
let _activeModel = null;

async function loadData() {
  const base = getBasePath();
  const [men, women, preds] = await Promise.all([
    fetch(`${base}data/men_bracket.json`).then(r => r.json()),
    fetch(`${base}data/women_bracket.json`).then(r => r.json()),
    fetch(`${base}data/predictions.json`).then(r => r.json()),
  ]);
  _menData = men;
  _womenData = women;

  // Support both old flat format and new multi-model format
  if (preds.models && preds.predictions) {
    _allPredictions = preds;
    _activeModel = preds.default || preds.models[0].id;
    _predictions = preds.predictions[_activeModel];
  } else {
    _allPredictions = null;
    _predictions = preds;
  }
}

function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/apps/prediction-web-app/src/')) {
    return '';
  }
  return '';
}

function getData(gender) {
  return gender === 'M' ? _menData : _womenData;
}

/**
 * Look up P(lowerID team wins) from pre-computed predictions.
 */
function lookupPrediction(teamA, teamB) {
  const lo = Math.min(teamA, teamB);
  const hi = Math.max(teamA, teamB);
  const key = `${lo}_${hi}`;
  if (_predictions && key in _predictions) {
    return teamA <= teamB ? _predictions[key] : 1 - _predictions[key];
  }
  return 0.5;
}

/**
 * Simulate a full bracket, returning a BracketResponse object
 * matching the format expected by bracket.js.
 */
function simulateBracket(gender, mode = 'deterministic', overrides = {}) {
  const data = getData(gender);
  if (!data) return null;

  // Build seed→team mapping
  const seedToTeam = {};
  const teamInfo = {};
  for (const s of data.seeds) {
    seedToTeam[s.seed] = s.teamId;
    teamInfo[s.teamId] = s;
  }

  // Results: slot → winning teamId
  const results = {};
  // Probabilities: slot → P(strong wins)
  const probabilities = {};

  function resolve(code) {
    if (seedToTeam[code] !== undefined) return seedToTeam[code];
    if (results[code] !== undefined) return results[code];
    return null;
  }

  // Sort slots: play-ins first (non-R), then R1-R6
  const playins = data.slots.filter(s => !s.slot.startsWith('R'));
  const rounds = [];
  for (let r = 1; r <= 6; r++) {
    rounds.push(...data.slots.filter(s => s.slot.startsWith(`R${r}`)).sort((a, b) => a.slot.localeCompare(b.slot)));
  }
  const orderedSlots = [...playins, ...rounds];

  for (const slot of orderedSlots) {
    const strongTeam = resolve(slot.strongSeed);
    const weakTeam = resolve(slot.weakSeed);

    if (strongTeam == null || weakTeam == null) continue;

    // P(strong team wins)
    const prob = lookupPrediction(strongTeam, weakTeam);
    probabilities[slot.slot] = prob;

    let winner;
    if (overrides[slot.slot] !== undefined) {
      winner = overrides[slot.slot];
    } else if (mode === 'probabilistic') {
      winner = Math.random() < prob ? strongTeam : weakTeam;
    } else {
      winner = prob >= 0.5 ? strongTeam : weakTeam;
    }

    results[slot.slot] = winner;
  }

  // Build games array in BracketResponse format
  const ROUND_NAMES = {
    'R1': 'Round of 64', 'R2': 'Round of 32', 'R3': 'Sweet 16',
    'R4': 'Elite 8', 'R5': 'Final Four', 'R6': 'Championship',
  };

  const games = [];
  for (const slot of data.slots) {
    const strongTeam = resolve(slot.strongSeed);
    const weakTeam = resolve(slot.weakSeed);
    const winnerId = results[slot.slot] || null;

    const strongInfo = strongTeam ? teamInfo[strongTeam] : null;
    const weakInfo = weakTeam ? teamInfo[weakTeam] : null;
    const winnerInfo = winnerId ? teamInfo[winnerId] : null;

    const roundKey = slot.slot.startsWith('R') ? slot.slot.substring(0, 2) : null;
    const roundName = roundKey ? (ROUND_NAMES[roundKey] || roundKey) : 'Play-In';

    games.push({
      slot: slot.slot,
      round_name: roundName,
      strong_seed: slot.strongSeed,
      weak_seed: slot.weakSeed,
      strong_id: strongTeam,
      weak_id: weakTeam,
      strong_name: strongInfo ? strongInfo.teamName : 'TBD',
      weak_name: weakInfo ? weakInfo.teamName : 'TBD',
      strong_seed_num: strongInfo ? strongInfo.seedNum : null,
      weak_seed_num: weakInfo ? weakInfo.seedNum : null,
      winner_id: winnerId,
      winner_name: winnerInfo ? winnerInfo.teamName : 'TBD',
      probability: probabilities[slot.slot] != null ? probabilities[slot.slot] : null,
    });
  }

  // Find champion
  const champSlot = data.slots.find(s => s.slot.startsWith('R6'));
  const champId = champSlot ? results[champSlot.slot] : null;
  const champInfo = champId ? teamInfo[champId] : null;

  // Build teams array
  const teams = data.seeds.map(s => ({
    team_id: s.teamId,
    team_name: s.teamName,
    seed: s.seed,
    seed_num: s.seedNum,
  }));

  return {
    season: data.season,
    gender: data.gender,
    gender_label: data.genderLabel,
    regions: data.regions,
    teams,
    games,
    champion_id: champId,
    champion_name: champInfo ? champInfo.teamName : null,
  };
}

/**
 * Static API object — drop-in replacement for the server-backed API.
 * Same interface as api.js from the Madness repo.
 */
const API = {
  async getSeasons() {
    await loadData();
    return { M: [2026], W: [2026] };
  },

  async getBracket(gender, season, mode = 'deterministic') {
    if (!_predictions) await loadData();
    return simulateBracket(gender, mode);
  },

  async predict(team1Id, team2Id, season, gender = 'M') {
    if (!_predictions) await loadData();
    const prob = lookupPrediction(team1Id, team2Id);
    const data = getData(gender);
    const t1 = data.seeds.find(s => s.teamId === team1Id);
    const t2 = data.seeds.find(s => s.teamId === team2Id);
    return {
      team1_id: team1Id,
      team2_id: team2Id,
      team1_name: t1 ? t1.teamName : `Team ${team1Id}`,
      team2_name: t2 ? t2.teamName : `Team ${team2Id}`,
      probability: prob,
    };
  },

  async simulate(gender, season, mode, overrides = {}) {
    if (!_predictions) await loadData();
    return simulateBracket(gender, mode, overrides);
  },

  getModels() {
    if (!_allPredictions) return [];
    return _allPredictions.models;
  },

  getActiveModel() {
    return _activeModel;
  },

  setModel(modelId) {
    if (!_allPredictions || !_allPredictions.predictions[modelId]) return;
    _activeModel = modelId;
    _predictions = _allPredictions.predictions[modelId];
  },
};
