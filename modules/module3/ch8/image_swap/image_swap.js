$(document).ready( () => {

    $("image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("#image_list a").click( evt => {
        const link = evt.currentTarget;

        $("#main_image").attr("src", link.href);
        $("#caption").text(link.title);

        evt.preventDefault();
    });

    $("li:first-child a").focus();
});