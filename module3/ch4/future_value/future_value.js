const $ = selector => document.querySelector(selector);

const processValues = () => {
    const investment = parseFloat($("#investment").value);
    const rate = parseFloat($("#rate").value);
    const years = parseFloat($("#years").value);
    let futureValue = investment;

    for (let i = 0; i < years; i++) {
        futureValue += futureValue * (rate / 100);
    }
    $("#future_value").value = futureValue.toFixed(2);
};

addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processValues);
})