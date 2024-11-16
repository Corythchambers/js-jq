const validateFloat = input => {
    if (isNaN(input)) {
        throw new Error("Invalid input: Input is not a valid number");
    }

    const str = input.toString();

    if (!str.includes('.')) {
        throw new Error("Invalid input: The input must have a decimal");
    }

    const decimalPart = str.split('.')[1];
    if (decimalPart.length < 4) {
        throw new Error("Invalid input: The input must have at least 4 decimal places");
    }
};

const displayError = e => {
    let html = `<span>${e.message}</span>`;
    $('#input').next().html(html);
}

function clearResults() {
    let html = `<span></span>`;
    $('#input').next().html(html);
    $("#results").text("");
}

$(document).ready( () => {

    const form = document.getElementById('user-input');
    const resetButton = document.getElementById('reset');

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        clearResults();

        // Get the float
        const floatInput = parseFloat($("#input").val());

        // Validate float on click
        try {
            validateFloat(floatInput);
            // Get results
            let results = `You typed number ${floatInput}`;
            results += `<br>Rounded to the nearest integer = ${Math.round(floatInput)}`;
            results += `<br>Square root rounded to integer = ${Math.round(Math.sqrt(floatInput))}`
            results += `<br>Rounded to the nearest 10th position = ${floatInput.toFixed(1)}`
            results += `<br>Rounded to the nearest 100th position = ${floatInput.toFixed(2)}`
            results += `<br>Rounded to the nearest 1000th position = ${floatInput.toFixed(3)}`

            // Display results with line breaks
            $("#results").html(results);
        } catch(e) {
            displayError(e);
        }


    })
    
    // reset form logic
    resetButton.addEventListener('click', function(event) {
        clearResults();
        $("#input").val("");
    })
})