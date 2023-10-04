let input = document.getElementById('screen');

const deleteData = () => {
    const box = input.value.slice(0, -1);
    input.value = box;
}

const add = (i) => {
    input.value += i;
}

const calculatePercentage = () => {
    if (input.value.includes('%')) {
        const expression = input.value.replace('%', '/100');
        input.value = eval(expression);
    } else {
        input.value = eval(input.value);
    }
}

const allClear = () => {
    input.value = "";
}

const equal = () => {
    if (input.value == undefined || input.value == 0){
        alert('Maaf Tidak Ada Input Nilai');
    } else {
        calculatePercentage(); // Panggil fungsi calculatePercentage sebelum mengevaluasi hasil
    }
}