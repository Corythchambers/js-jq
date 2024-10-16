const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#join_list").addEventListener("click", evt => {
        const email1 = $("#email_1").value;
        const email2 = $("#email_2").value;
        const firstName = $("first_name").value;

        let errorMessage = "";

        if (email1 == "") {
            errorMessage += "First email is required.\n";
        }
        if (email2 == "") {
            errorMessage += "Second email is required.\n";
        }

        if (email1 != email2) {
            errorMessage += "Both emails must match.\n";
        }

        if (firstName == "") {
            errorMessage += "First name is required.\n"
        }

        if (errorMessage != "") {
            alert(errorMessage);
            evt.preventDefault();
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    })

    $("#email_1").focus();
});