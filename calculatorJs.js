function calculate() {
    // Mengambil nilai dari input
    var num1 = parseFloat(document.getElementById('num1').value);
    var operator = document.getElementById('operator').value;
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator2 = document.getElementById('operator2').value;
    var num3 = parseFloat(document.getElementById('num3').value);
    var operator3 = document.getElementById('operator3').value;
    var num4 = parseFloat(document.getElementById("num4").value);

    // Memeriksa apakah angka kosong
    if ((isNaN(num1) && isNaN(num2)) || isNaN(num3) && isNaN(num4)) {
        alert("Angka tidak boleh kosong, Masukan angka yang ingin dihitung !");
        return;
    }

    // Melakukan perhitungan berdasarkan operator yang dipilih
    var hasil = 0;
    switch (operator) {
        case '+':
            hasil = num1 + num2;
            break;
        case '-':
            hasil = num1 - num2;
            break;
        case '*':
            hasil = num1 * num2;
            break;
        case '/':
            hasil = num1 / num2;
            break;
        default:
            alert("Operator pertama tidak valid");
            return;
    }

    switch (operator2) {
        case '+':
            hasil += num3;
            break;
        case '-':
            hasil -= num3;
            break;
        case '*':
            hasil *= num3;
            break;
        case '/':
            hasil /= num3;
            break;
        default:
            alert("Operator kedua tidak valid");
            return;
    }

    switch (operator3) {
        case '+':
            hasil += num4;
            break;
        case '-':
            hasil -= num4;
            break;
        case '*':
            hasil *= num4;
            break;
        case '/':
            hasil /= num4;
            break;
        default:
            alert("Operator kedua tidak valid");
            return;
    }
    // Menampilkan hasil perhitungan
    document.getElementById('result').innerText = hasil;
}

function hapusInput(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("num3").value="";
    document.getElementById("num4").value="";
    document.getElementById("result").innerText="";
}
