let result = document.getElementById('screen');

const display = (a) => {
    if (a == 'clear') {
        result.value = '';
    } else if (a == 'del') {
        result.value = result.value.slice(0, -1);
    } else if (a == 'action') {
        try {
            // Periksa apakah ekspresi mengandung operator persen (%)
            if (result.value.includes('%')) {
                // Jika ada operator persen, hitung persentase
                let expression = result.value.replace('%', '/100');
                result.value = eval(expression);
            } else {
                // Jika tidak ada operator persen, hitung ekspresi biasa
                result.value = eval(result.value);
            }
        } catch (error) {
            alert('Maaf kode yang Anda masukkan salah, Semangat!!!');
        }
    } else {
        result.value += a;
    }
};