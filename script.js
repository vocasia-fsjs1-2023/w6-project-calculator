
function clearScreen() {
    document.getElementById("result").value = "";
}
 

function display(value) {
    document.getElementById("result").value += value;
}
 

function calculate() {
    var input = document.getElementById("result").value;
    if (input.length < 3) {
        alert("Input operasi minimal harus 3 karakter.");
        return; 
    }

    try {
        var result = eval(input);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Terjadi kesalahan dalam perhitungan" );
    }
}
