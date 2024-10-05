"use strict";
$(document).ready( () => {


    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;

        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        } else {
            $(h2).next().show();
        }

        // Pre-load images
        $(h2).next().find("a").each((index, link) => {
            const image = new Image();
            image.src = link.href;
        });

        $(h2).next().find("a").click(evt => {
            const link = evt.currentTarget;
            $("#image").attr("src", link.href); 
            evt.preventDefault();
        });
    });
});