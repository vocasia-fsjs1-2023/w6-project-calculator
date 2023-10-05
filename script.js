function appendToDisplay(value) {
   document.getElementById("output").value += value;
}
function clearNum() {
   document.getElementById("output").value = '';
}
function deleteLastNum() {
   var output = document.getElementById("output");
   output.value = output.value.slice(0, -1); 
}
function calculate() {
   try {
       document.getElementById("output").value = eval(document.getElementById("output").value);
   } catch (error) {
       document.getElementById("output").value = 'Error';
   }
}
