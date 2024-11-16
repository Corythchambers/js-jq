function countCharacters(searchChar, str) {
    const regex = new RegExp(searchChar, 'gi');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

function clearResults() {
    $("#results").text("");
    $(".error-text").remove();
}

function displayErrorInNewWindow(message) {
    const newWindow = window.open(
        "", 
        "_blank", 
        "width=300,height=100,left=200,top=200"
    );

    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Character Not Found</title>
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 20px;">
            <p>${message}</p>
            <button onclick="window.close()" style="padding: 5px 10px; font-size: 14px;">Close</button>
        </body>
        </html>
    `);

    newWindow.document.close(); // Finalize the content of the new window
}

function displayError(inputElement, message) {
    const errorSpan = `<span class="error-text">${message}</span>`;
    // Remove any existing error for this input
    $(inputElement).next(".error-text").remove();
    // Add the error span after the input element
    $(inputElement).after(errorSpan);
}

function validateInputs(searchChar, str) {
    if (!str) {
        throw { input: "#input", message: "Please enter at least one character" };
    }
    if (!searchChar) {
        throw { input: "#search-char", message: "Please enter a character" };
    }
}

$(document).ready(() => {
    const form = document.getElementById("user-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearResults();

        try {
            const searchChar = $("#search-char").val();
            const str = $("#input").val();

            // Validate inputs and display errors under relevant fields
            validateInputs(searchChar, str);

            const count = countCharacters(searchChar, str);
            if (count == 0) {
                const errorMessage = `Search character '${searchChar}' not found in the content you typed.`;
                displayErrorInNewWindow(errorMessage);

                // Clear results and input box
                clearResults();
                $("#input").val("");
                $("#search-char").val("");
            } else {
                const plural = count === 1 ? "" : "s";
                $("#results").text(
                    `The character '${searchChar}' was found ${count} time${plural}!`
                );
            }
        } catch (e) {
            // Display the error under the relevant input box
            displayError(e.input, e.message);
        }
    });

    form.addEventListener("reset", function () {
        clearResults();
    });
});
