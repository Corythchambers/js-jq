function getEveryXInt(start, finish, interval) {
    let integers = [];

    for (i = start; i <= finish; i++) {
        if (i % interval == start - interval) {
            integers.push(i);
        }
    }
    return integers;
}

function getResultString(integers, operator) {
    let product;
    if (operator == '*') {
        product = integers.reduce((acc, num) => acc * num, 1);
    } else {
        product = integers.reduce((acc, num) => acc + num, 0);
    }

    return `The result of ${integers.join(` ${operator} `)} is ${product.toLocaleString()}`;
}

function getArrayWhileLoop(start, finish, interval) {
    let integers = [];
    let i = start;
    while (i <= finish) {
        if (i % interval == start - interval) {
            integers.push(i);
        }
        i++;
    }
    return integers;
}

$(document).ready(() => {
    //calculate product and sum of every fourht integer from 5 to 25 inclusive

    const firstSet = getEveryXInt(5, 25, 4);
    const productString1 = getResultString(firstSet, '*');
    const sumString1 = getResultString(firstSet, '+');

    const secondSet = getArrayWhileLoop(3, 18, 3);
    const productString2 = getResultString(secondSet, '*');
    const sumString2 = getResultString(secondSet, '+');

    $("#result").html(`${productString1}<br>${sumString1}<br>${productString2}<br>${sumString2}`);

    $("#draggable-result-box").draggable();
})