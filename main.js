// script.js
function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    try {
        var display = document.getElementById("display");
        var result = eval(display.value);
        if (isNaN(result)) {
            throw "Error";
        }
        display.value = result;
    } catch (error) {
        alert("Terjadi kesalahan. Pastikan input valid!");
        clearDisplay();
    }
}