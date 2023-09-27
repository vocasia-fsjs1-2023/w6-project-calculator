let displayValue = "";

function appendToDisplay(value) {
  if (value === "%") {
    // Menghitung persentase jika persen ditambahkan
    try {
      displayValue = eval(displayValue) / 100;
      document.getElementById("display").value = displayValue;
    } catch (error) {
      alert("Error: Ekspresi matematika tidak valid");
      clearDisplay();
    }
  } else {
    displayValue += value;
    document.getElementById("display").value = displayValue;
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    alert("Error: Ekspresi matematika tidak valid");
    clearDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}
