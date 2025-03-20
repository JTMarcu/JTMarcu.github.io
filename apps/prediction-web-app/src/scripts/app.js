// This file contains the JavaScript code for the application. It handles loading the CSV data, processing user input for team matchups, and displaying the predicted winner and scores.

document.addEventListener('DOMContentLoaded', () => {
    const team1Select = document.getElementById('team1');
    const team2Select = document.getElementById('team2');
    const predictButton = document.getElementById('predictButton');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const csvVersionSelect = document.getElementById('csvVersion');

    let matchData = [];

    // Function to load and parse the CSV file
    function loadCSV(file) {
        Papa.parse(`data/${file}`, {
            download: true,
            header: true,
            complete: function(results) {
                matchData = results.data;
                populateTeams();
            }
        });
    }

    // Load the default CSV file
    loadCSV(csvVersionSelect.value);

    // Event listener for CSV version change
    csvVersionSelect.addEventListener('change', () => {
        loadCSV(csvVersionSelect.value);

        // Update model info dynamically
        const modelInfoDiv = document.querySelector('.model-info');
        if (csvVersionSelect.value === 'w_madness_pred.csv') {
            modelInfoDiv.innerHTML = `
                <h2>Women's Madness Model</h2>
                <p>Trained on historical women's tournament data and includes predictions for the 2025 season.</p>
            `;
        } else if (csvVersionSelect.value === 'madness_pred.csv') {
            modelInfoDiv.innerHTML = `
                <h2>Madness Model 3.0</h2>
                <p>Trained on 2010-2023 data, validated on 2024 stats, and includes partial 2025 season data.</p>
            `;
        } else if (csvVersionSelect.value === 'madness_pred1.csv') {
            modelInfoDiv.innerHTML = `
                <h2>Madness Model 1.0</h2>
                <p>Initial model trained on 2010-2020 data.</p>
            `;
        } else if (csvVersionSelect.value === 'madness_pred2.csv') {
            modelInfoDiv.innerHTML = `
                <h2>Madness Model 2.0</h2>
                <p>Improved model trained on 2010-2022 data.</p>
            `;
        }
    });

    function populateTeams() {
        team1Select.innerHTML = '';
        team2Select.innerHTML = '';
        const teams = new Set();
        matchData.forEach(match => {
            teams.add(match.Team1Name);
            teams.add(match.Team2Name);
        });

        teams.forEach(team => {
            const option1 = document.createElement('option');
            option1.value = team;
            option1.textContent = team;
            team1Select.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = team;
            option2.textContent = team;
            team2Select.appendChild(option2);
        });
    }

    predictButton.addEventListener('click', () => {
        const team1 = team1Select.value;
        const team2 = team2Select.value;

        if (team1 === team2) {
            errorDiv.textContent = 'Please select two different teams.';
            resultDiv.textContent = '';
            return;
        }

        errorDiv.textContent = '';

        const match = matchData.find(m => 
            (m.Team1Name === team1 && m.Team2Name === team2) || 
            (m.Team1Name === team2 && m.Team2Name === team1)
        );

        if (match) {
            const winner = match.P_Score_1 > match.P_Score_2 ? match.Team1Name : match.Team2Name;
            const score = match.P_Score_1 > match.P_Score_2 ? match.P_Score_1 : match.P_Score_2;
            resultDiv.textContent = `Predicted Winner: ${winner} with score ${score}`;
        } else {
            resultDiv.textContent = 'No match data available for the selected teams.';
        }
    });
});