let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    document.getElementById('result').value = currentResult;
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    if (currentResult === '') {
       alert('Isi terlebih dahulu angka!')
    } else {
        try {
            currentResult = eval(currentResult);
            document.getElementById('result').value = currentResult;
        } catch (error) {
            currentResult = '';
            document.getElementById('result').value = 'Error';
        }
    }
}

function clearEntry() {
    currentResult = currentResult.slice(0, -1);
    document.getElementById('result').value = currentResult;
}


