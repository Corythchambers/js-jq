function verifyFormat(userInput) {
    const regex = /\(\d{3}\)\d{3}-\d{4}/
    if (!regex.test(userInput)) {
        throw { input: "#input", message: "Please enter a number that matches the following format (NNN)NNN-NNNN" }
    }
}

function displayError(inputElement, message) {
    const errorSpan = `<span class="error-text">${message}</span>`;
    // Remove any existing error for this input
    $(inputElement).next(".error-text").remove();
    // Add the error span after the input element
    $(inputElement).after(errorSpan);
}

$(document).ready(() => {
    const form = document.getElementById("user-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const userInput = $("#input").val();

        try {
            // Verify input is correctly formatted
            verifyFormat(userInput);
            $(".error-text").remove();


            // Process and split the input into 3 parts
            const parts = userInput.match(/\d+/g);
            if (parts.length === 3) {
                $("#result1").val(parts[0]);
                $("#result2").val(parts[1]);
                $("#result3").val(parts[2]);
            }

        } catch (error) {
            displayError(error.input, error.message);
        }
    });

    // Clear error spans on form reset
    form.addEventListener("reset", function () {
        $(".error-text").remove();
        $("#input").val("");
        $("#result1, #result2, #result3").val("");
    });
});
