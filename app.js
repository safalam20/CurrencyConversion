eventListeners();

function eventListeners(){
    document.getElementById("amount").addEventListener("input",takeInputs);
    document.getElementById("firstCurrency").addEventListener("change",takeInputs);
    document.getElementById("secondCurrency").addEventListener("change",takeInputs);
    

}
function takeInputs(e){
    
    Currency.doMath(
        document.getElementById("amount").value,
        document.getElementById("firstCurrency").value,
        document.getElementById("secondCurrency").value);

    UI.changeOutput(document.getElementById("firstCurrency").value,document.getElementById("secondCurrency").value);

}