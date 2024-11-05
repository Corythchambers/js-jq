$(document).ready( () => {
 const scores = [];

 $("#add_score").click( () => {
    const score = parseFloat($("#score").val());

    if (isNaN(score) || score < 0 || score > 100) {
        $("#add_score").next().text("Score must be from 0  to 100");
    } else {
        $("#add_score").next().text("");

        scores.push(score);

        $("#all").text(scores.join(", "));
        const total = scores.reduce( (tot, val) => tot + val, 0);
        const avg = (total/scores.length).toFixed(2);
        $("#avg").text(avg);

        const len = scores.length;
        const lastScores = (len <= 3) ? scores.slice() : scores.slice(len - 3, len);
        lastScores.reverse();
        $("#last").text(lastScores.join(", "));
    }

    $("#score").val("");
    $("#score").focus();
 });

 $("#score").focus();
});