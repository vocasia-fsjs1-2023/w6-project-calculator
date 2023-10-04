let display = document.getElementById("display");
let input = "";

function addNumber(value) {
	input += value;
	display.value = input;
}

function clearCalculatorScreen() {
	input = "";
	display.value = "";
}

function calculateOperation() {
	try {
		let result = eval(input);
		input = result.toString();
		display.value = input;
	} catch (error) {
		clearCalculatorScreen();
		alert("Inputan tidak valid");
		display.value = "Error";
	}
}
