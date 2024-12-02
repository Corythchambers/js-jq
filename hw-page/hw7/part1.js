$(document).ready( () => {
    $('input[name="background"]').on('change', function () {
        const selectedColor = $(this).val();
        $('main').css('background-color', selectedColor);
    })

    $('input[type="checkbox"]').on('change', function () {
        let currentStyles = {
            "text-decoration": "",
            "font-weight": "",
            "font-style": ""
        };
        
        $('input[type="checkbox"]:checked').each(function () {
            const style = $(this).attr('id');
            if (style === 'text-style1') {
                currentStyles["text-decoration"] = "underline";
            } else if (style === 'text-style2') {
                currentStyles["font-weight"] = "bold";
            } else if (style === 'text-style3') {
                currentStyles["font-style"] = "italic";
            }
        })

        $('main').css({
            "text-decoration": currentStyles["text-decoration"],
            "font-weight": currentStyles["font-weight"],
            "font-style": currentStyles["font-style"]
        });
    });

    $('#font-size').on('change', function () {
        const selectedFontSize = $(this).val();
        $('main').css('font-size', selectedFontSize);
    })
});