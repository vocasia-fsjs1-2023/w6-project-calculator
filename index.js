function add(value) {
    const inputElement = document.getElementById('input');
    inputElement.value += value;
}

function samaDengan() {
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    try {
        const result = eval(inputElement.value);
        if (!isNaN(result)) {
            resultElement.textContent = `Hasil: ${result}`;
        } else {
            throw "Input tidak valid";
        }
    } catch (error) {
        alert(error);
    }
}

function clearInput() {
    const inputElement = document.getElementById('input');
    inputElement.value = '';
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
}