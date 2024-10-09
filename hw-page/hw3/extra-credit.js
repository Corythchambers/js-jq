function getRandomOperation() {
    const operations = [
        '+',
        '-',
        '*',
        '/',
    ];

    const randomIndex = Math.floor(Math.random() * operations.length);

    const randomValue = operations[randomIndex];

    return randomValue;
}

function getEquationData(operation) {
    const num1 = Number((Math.random() * 100).toFixed(0));
    const num2 = Number((Math.random() * 100).toFixed(0));

    let result;
    let operationText;

    if (operation == '+') {
        result = num1 + num2;
        operationText = "plus";
    } else if (operation == '-') {
        result = num1 - num2;
        operationText = "minus";
    } else if (operation == '*') {
        result = num1 * num2;
        operationText = "multiplied by";
    } else {
        result = (num1 / num2).toFixed(0);
        operationText = "divided by";
    }

    const equation = `${num1} ${operationText} ${num2}`;
    return { equation, result };
}

function startNewGame() {
    const operation = getRandomOperation();
    const { equation, result } = getEquationData(operation);

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
