
let operando;
let number1="";

function digitAdder(x) {
    
    
    let numberOnDisplay=x;
    console.log(numberOnDisplay)
    number1=`${number1}${numberOnDisplay}`;
    console.log(number1)
    document.getElementById("display").innerHTML = number1;
    
    }
function operatorAdder(y) {
//`${number1}`
if(y='+'){
    operando=`${number1}+`;
    console.log(operando)
    numberOnDisplay=0;
}
}