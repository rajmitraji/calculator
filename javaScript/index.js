const resultElement=document.getElementById('result');
let displayValue='';
function inputM(value){
    displayValue +=value;
    document.getElementById('result').value=displayValue;
}
function clearDisplay() {
    displayValue='';
    document.getElementById('result').value='';
}
function calculateResult() {
    try{
        displayValue =eval(displayValue);
        document.getElementById('result').value=displayValue;
    }
    catch{
        document.getElementById('result').value='Error';
    }
}