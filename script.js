let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (!isNaN(result)) {
            document.getElementById("display").value = result;
            currentInput = result.toString();
        } else {
            throw "Error";
        }
    } catch (error) {
        alert("Error: Invalid input");
        clearDisplay();
    }
}
