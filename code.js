// `
let operando='';
let number1='';
let number2='';
let numberHolder='';
let result='';


function equal(x, y, z){
       if(z=='+'){
        x=parseFloat(number1);
        y=parseFloat(number2);
        result= x + y;
        console.log(result+',result');
        document.getElementById('display').innerHTML=result;
      number1=result;
      number2='';
      
 }else if(z=='*'){
        x=parseFloat(number1);
        y=parseFloat(number2);
        result= x * y;
        console.log(result);
        document.getElementById('display').innerHTML=result;
    number1=result;
    number2='';
    
 }else if(z=='/'){
        x=parseFloat(number1);
        y=parseFloat(number2);
        result= x / y;
        result= result.toFixed(1);  // CONDICION PARA QUE NO MUESTRE DECIMAL CUANDO SEA .0
        console.log(result);
        document.getElementById('display').innerHTML=result;
    number1=result;
    number2='';
    
 }else if(z=='-'){
        x=parseFloat(number1);
        y=parseFloat(number2);
        result= x - y;
        console.log(result);
        document.getElementById('display').innerHTML=result;
    number1=result;
    number2='';
    
 }
 
 
  
}


function operator(x){
  if(operando==''){
    operando= x;
    console.log(operando);
  } else if(operando!=='' && number2!==''){
  operando= x;
  equal(number1, number2, operando);
  console.log(operando+'2')
  } else if(operando!=''){
    operando= x;
  }}



function digitAdder(x) {
  if(operando=='' && number2==''){
    
    number1=`${number1}${x}`;
    console.log(number1+',number1')
    document.getElementById('display').innerHTML=number1;
  } else if(operando!=='' && number1!==''){
    number2=`${number2}${x}`;
    console.log(number2+',number2')
    document.getElementById('display').innerHTML=number2;
  }
}
 
function ce(){
 operando='';
 number1='';
 number2='';
 numberHolder='';
 result='';
 document.getElementById('display').innerHTML=0
}
while(operando!=''){
if(operando=='+'){
  const elem= document.getElementById('mas');
  elem.style.backgroundColor= 'rgb(61, 120, 196)';
} else if( operando=='-'){
  const elem= document.getElementById('menos');
  elem.style.backgroundColor= 'rgb(61, 120, 196)';
}else if(operando== '/'){
  const elem= document.getElementById('dividir');
  elem.style.backgroundColor= 'rgb(61, 120, 196)';
}else if(operando== '*'){
  const elem= document.getElementById('por');
  elem.style.backgroundColor= 'rgb(61, 120, 196)';
};}