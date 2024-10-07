$(document).ready( () => {
    $("#submit").click( () => {
        const hwAvg = parseFloat($("#hw-average").val());
        const midExam = parseFloat($("#midterm-exam").val());
        const finalExam = parseFloat($("#final-exam").val());
        const participation = parseFloat($("#participation").val());

        const isValidScore = (value) => !isNaN(value) && value >= 0 && value <= 100;

        if (!isValidScore(hwAvg) || !isValidScore(midExam) || !isValidScore(finalExam) || !isValidScore(participation)) {
            $("#result").val("Please enter valid numbers between 0 - 100")
        } else {
            const average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
            let letterGrade;
            if (average >= 90) {
                letterGrade = "A";
            } else if (average >= 80) {
                letterGrade = "B";
            } else if (average >= 70) {
                letterGrade = "C";
            } else if (average >= 60) {
                letterGrade = "D"
            } else {
                letterGrade = "F"
            }

            let resultsString = `Grade Average:${average.toFixed(0)}\nLetter Grade:${letterGrade}`
            if (letterGrade == "D" || letterGrade == "F") {
                $("#result").val(`${resultsString}\nStudent must retake the course`);
            } else {
                $("#result").val(resultsString);
            }
        }
    })

    $("#reset").click( () => {
        $("#student-grades").find("input[type='number'], textarea").val("");
    })
});