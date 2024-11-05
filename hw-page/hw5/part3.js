document.addEventListener("DOMContentLoaded", function() {
    const db = [
        ['AL', 'Alabama', 'Montgomery', '4,903,185'],
        ['AK', 'Alaska', 'Juneau', '731,545'],
        ['AZ', 'Arizona', 'Phoenix', '7,278,717'],
        ['AR', 'Arkansas', 'Little Rock', '3,017,825'],
        ['CA', 'California', 'Sacramento', '39,512,223'],
        ['CO', 'Colorado', 'Denver', '5,758,736']
    ];

    const form = document.getElementById('user-input');
    const stateInformation = document.getElementById('state-information');
    const userInputField = document.getElementById('state-input');
    const resetButton = document.getElementById('reset');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const userInput = userInputField.value.toLowerCase();
        let exists = false;
        let stateInfo = "Sorry, we do not have information about this state! We only have information about the following states:<br>";
        
        // Add the list of states
        for (let i = 0; i < db.length; i++) {
            stateInfo += `- <b>${db[i][1]} (${db[i][0]})</b><br>`;
        }
        
        // Search for the user's input in the database
        for (let i = 0; i < db.length; i++) {
            if (userInput === db[i][0].toLowerCase() || userInput === db[i][1].toLowerCase()) {
                exists = true;
                stateInfo = `
                    State Abbreviation: <b>${db[i][0]}</b><br>
                    State Name: <b>${db[i][1]}</b><br>
                    Capital: <b>${db[i][2]}</b><br>
                    Population: <b>${db[i][3]}</b><br>`;
                break;
            }
        }

        // Display the results
        stateInformation.innerHTML = stateInfo;
    });

    // Clear the form and results when "Clear form" button is clicked
    resetButton.addEventListener('click', function(event) {
        event.preventDefault();
        stateInformation.innerHTML = "";
        userInputField.value = "";
    });
});
