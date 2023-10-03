let result = document.getElementById('screen');

const display = (a) => {
    if (a == 'clear') {
        result.value = '';
    } else if (a == 'del') {
        result.value = result.value.slice(0, -1);
    } else if (a == 'action') {
        try {
            if (result.value.includes('%')) {
                let expression = result.value.replace('%', '/100');
                result.value = eval(expression);
            } else {
                result.value = eval(result.value);
            }
        } catch (error) {
            alert('Maaf kode yang Anda masukkan salah, Semangat!!!');
        }
    } else {
        result.value += a;
    }
};