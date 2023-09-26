let input = document.getElementById('screen');

const deleteData = () => {
    const box = document.querySelector('#screen').value.slice(0, -1);
    document.querySelector('#screen').value = box;
}

const add = (i) => {
    input.value += i;
}

const allClear = () => {
    input.value = "";
}

const equal = () => {
    if (input.value == undefined || input.value == 0){
        alert('Tidak Ada Input Nilai');
    } else {
        input.value = eval(input.value);
    }
}