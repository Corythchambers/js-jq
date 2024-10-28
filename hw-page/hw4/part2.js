function calculateCompoundInterest(principal, rate, years) {
    return principal * Math.pow((1 + rate), years);  // Fixed exponentiation
}

function createTableHtml(id, data) {
    let table = `<table id="${id}" border="1">
                    <thead>  <!-- Corrected from <thread> to <thead> -->
                        <tr>
                            <th>Year</th>
                            <th>Principal</th>
                            <th>Interest Rate</th>
                        </tr>
                    </thead>
                    <tbody>`;
    data.forEach(row => {
        table += `<tr>
                    <td>${row.year}</td>
                    <td>${row.principal.toFixed(2)}</td>
                    <td>${row.interestRate}</td>
                </tr>`;
    });
    table += `</tbody></table><br>`;
    return table;
}

function createTableData(year =  5, initialPrincipal = 1000,interestRate = 0.05) {
    let principal = initialPrincipal;
    let tableData = [];
    for (let i = 1; i <= year; i++) {
        tableData.push({ year: i, principal, interestRate });
        principal = calculateCompoundInterest(principal, interestRate, 1);  
    }
    return tableData;
}

$(document).ready(() => {
    const interestRates = [
        { id: 'table1', years: 5, principal: 1000, rate: 0.05 },
        { id: 'table2', years: 5, principal: 1000, rate: 0.06 },
        { id: 'table3', years: 5, principal: 1000, rate: 0.07 }
    ];

    interestRates.forEach(item => {
        const tableData = createTableData(item.years, item.principal, item.rate);
        $("#content").append(createTableHtml(item.id, tableData));
        $(`#${item.id} tbody tr:even`).css("background-color", "#d9f5ea");
        $(`#${item.id} tbody tr:odd`).css("background-color", "#ffffff"); 
    })
});
