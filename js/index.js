let masukan = document.getElementById('inputNilai');

const backSpace = () => {
    const box = document.querySelector('#inputNilai').value.slice(0, -1);
    document.querySelector('#inputNilai').value = box;
}

const tambah_Nilai = (i) => {
    masukan.value += i;
}

const hapusData = () => {
    masukan.value = "";
}

const samaDengan = () => {
    if(masukan.value == undefined || masukan.value == 0){
        alert('Anda blum Menginput Nilai Apapun!');
    }else{
        masukan.value = eval(masukan.value);
    }
}