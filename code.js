
let operando;
let number1="";
let numberHolder='';
let numberHolderDos='';
function digitAdder(x) {
    
    
    let numberOnDisplay=x;
    console.log(numberOnDisplay)
    numberHolder=`${numberHolder}${numberOnDisplay}`;
    console.log(numberHolder)
    document.getElementById("display").innerHTML = numberHolder;
    
    }
function operatorAdder(y) {
//`${number1}`
if(y=='+'){
    console.log(y);
    number1=numberHolder
    operando=`${numberHolderDos}+${number1}`;
    console.log(operando)
    numberHolder='';
    const numeros= document.getElementsByClassName("botones numeros");
    
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener("click", function() {
          segundoNumero(numeros[i].innerHTML);
          console.log(numeros[i]);
        });
      }console.log(numeros);
}else if(y=='-'){
    console.log(y);
    number1=numberHolder
    operando=`${numberHolderDos}-${number1}`;
    console.log(operando)
    numberHolder='';
    
    
     const numeros= document.getElementsByClassName("botones numeros");
    console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener("click", function() {
          segundoNumero(numeros[i].innerHTML);
          console.log(numeros[i]);
        });
      }console.log(numeros);
}else if(y=='/'){
    console.log(y);
    number1=numberHolder
    operando=`${numberHolderDos}/${number1}`;
    console.log(operando)
    numberHolder='';

    
     const numeros= document.getElementsByClassName("numeros");
     console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
    
        numeros[i].addEventListener("click", function() {
          segundoNumero(numeros[i].innerHTML);
          console.log(numeros[i]);
        });
      }console.log(numeros);
    
}else if(y=='*'){
    console.log(y);
    number1=numberHolder
    operando=`${numberHolderDos}*${number1}`;
    console.log(operando)
    numberHolder='';
    
    
     const numeros= document.getElementsByClassName("botones numeros");
     console.log(numeros);
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].addEventListener("click", function() {
          segundoNumero(numeros[i].innerHTML);
          console.log(numeros[i]);
        });
      }console.log(numeros);
};}
function segundoNumero(x){
    let numberOnDisplay=x;
    console.log(numberOnDisplay)
    numberHolderDos=`${numberHolderDos}${numberOnDisplay}`;
    console.log(numberHolderDos)
    console.log(operando)
    document.getElementById("display").innerHTML = numberHolderDos;    
}