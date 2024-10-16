const $ = selector => document.querySelector(selector);

const getValidNumberErrorMsg = lbl => `${lbl} must be a valid number.`;
const getGreaterThanZeroErrorMsg = lbl => `${lbl} must be greater than 0.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles)) {
        alert(getValidNumberErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (miles <= 0) {
        alert(getGreaterThanZeroErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons)) {
        alert(getValidNumberErrorMsg("Gallons"));
        focusAndSelect("#gallons");
    } else if (gallons <= 0) {
        alert(getGreaterThanZeroErrorMsg("Gallons"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
}

const clearForm = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";

    $("#miles").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear_form").addEventListener("click", clearForm)
    $("#miles").focus();
});