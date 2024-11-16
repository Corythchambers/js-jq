"use strict";

$(document).ready( () => {

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // get expiration date
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 21)

            localStorage.expiration = expirationDate;

            // add task to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            localStorage.E14tasks = tasks.concat(task, "\n");

            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(localStorage.E14tasks);
                 
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration")
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    let storedExpiration = localStorage.expiration;
    storedExpiration = Date.parse(storedExpiration);
    storedExpiration = new Date(storedExpiration);
    let todaysDate = new Date();

    if (storedExpiration.getTime() < todaysDate.getTime()) {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration")
    } else {
        $("#task_list").val(localStorage.E14tasks);
    }
    $("#task").focus();
});