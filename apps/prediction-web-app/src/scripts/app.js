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