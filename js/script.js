// Menambahkan angka
function add(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung
function equal() {
	var hasil = document.form.textarea.value;
  
	hasil = hasil.trim();
  
	if (hasil === "") {
	  alert("Input tidak boleh kosong");
	  return;
	}
  
	try {
	  var hasilHitung = eval(hasil);
	  document.form.textarea.value = hasilHitung;
	} catch (error) {
	  alert("Terjadi kesalahan dalam perhitungan");
	}
  }
  
// Clear input
function clearinput(){
	document.form.textarea.value = "";
}

// Delete nomor terakhir
function delendnumber(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}

  
  