$(document).ready(() => {
    $(function() {
        $(document).tooltip();
    });

    $("#submit").click( () => {

    const item1 = parseInt($("#item1").val());
    const item2 = parseInt($("#item2").val());
    const item3 = parseInt($("#item3").val());
    const item4 = parseInt($("#item4").val());

    $("#item1-sold").val(item1);
    $("#item2-sold").val(item2);
    $("#item3-sold").val(item3);
    $("#item4-sold").val(item4);

    const price1 = 20.99;
    const price2 = 12.75;
    const price3 = 9.95;
    const price4 = 35.89;

    $("#item1-total").val((item1 * price1).toFixed(2));
    $("#item2-total").val((item2 * price2).toFixed(2));
    $("#item3-total").val((item3 * price3).toFixed(2));
    $("#item4-total").val((item4 * price4).toFixed(2));

    const totalSold = item1 + item2 + item3 + item4;
    const totalEarnings = (item1 * price1) + (item2 * price2) + (item3 * price3) + (item4 * price4);

    $("#total-sold").val(totalSold);
    $("#total-earnings").val(totalEarnings.toFixed(2));
    });
})