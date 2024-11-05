$(document).ready( () => {


    // E1
    function displayResult(){
        const numbers = []
        for (let i = 1; i <= 4; i++){
            numbers.push(parseFloat($(`#number${i}`).val()));
        }

        const lessThanZero = numbers.reduce((count, num) => {
            return num < 0 ? count + 1 : count;
        }, 0);

        const overZero = numbers.reduce((count, num) => {
            return num >= 0 ? count + 1 : count;
        }, 0);

        const product = numbers.reduce((product, num) => {
            return num * product;
        }, 1)

        $("#result").val(`Less than 0: ${lessThanZero}\nGreater or equal to 0: ${overZero}\nProduct: ${product}`);
    }

    $("#submitButton").on("click", displayResult);
});