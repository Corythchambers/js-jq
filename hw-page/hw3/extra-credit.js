function getEquationData() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    result = num1 * num2;
    operationText = "multiplied by";


    const equation = `${num1} ${operationText} ${num2}`;
    return { equation, result };
}

function startNewGame() {
    const { equation, result } = getEquationData();

    $("#question").text(`What is\n${equation}`);

    $("#answer").val('');
    $("#result").text('');

    $("#submit").data("currentResult", result);
}

function showPlayAgainButtons() {
    const yesButton = $('<button id="yes-button" class="styled-button">Yes</button>');
    const noButton = $('<button id="no-button" class="styled-button">No</button>');

    $("#result-container").append(yesButton).append(noButton);

    $("#yes-button").click(() => {
        startNewGame();

        $("#yes-button").remove();
        $("#no-button").remove();
    });

    $("#no-button").click(() => {
        $('#result').text("Thanks for playing!");
        $("#yes-button").remove();
        $("#no-button").remove();
    })
}

$(document).ready(() => {
    startNewGame();

    $("#submit").click(() => {
        const userAnswer = $("#answer").val();
        const correctAnswer = $("#submit").data("currentResult");

        if (userAnswer == correctAnswer) {
            $("#result").text("Very good!\nWould you like to play again?");
            showPlayAgainButtons();
        } else {
            $("#result").text("No. Please try again.");
        }
    });
});
