
let Display="";
let num1, num2, operator, final=null;


function display(num){
    Display+=num
    document.getElementById("display").innerHTML=Display;
    return parseFloat(Display);
}

function operation(OP){

   
    
    if(num1==null){
        num1=parseFloat(Display);
    }    
    else{
        num2=parseFloat(Display);
        cal();
    }

    operator=OP

    Display="";
}

function cal(){
   

    if(operator=='+'){
        num1=num1+num2;
     }
    if(operator=='-'){
        num1=num1-num2;
    } 
    if(operator=='*'){
        num1=num1*num2;
    }
    if(operator=='/'){
        if(num2!=0){
        num1=num1/num2;
        }
        else{
        document.getElementById("display").innerHTML="Error";
        num1=null;
        num2=null;
        operator=null;
        Display="";
        return;
        }
    }

    document.getElementById("display").innerHTML=num1;
    num2=null;
}

function result(){
    if(operator!= null && num1!=null){
        num2=parseFloat(Display);
        cal();
        operator=null;
    }
    else if(operator==null && Display!=""){
        document.getElementById("display").innerHTML=Display;
    }
   else{
    document.getElementById("display").innerHTML="0";
    }

}



 function clearDisplay(){
    num1=null;
    num2=null;
    operator=null;
    Display="";

    document.getElementById("display").innerHTML="0";
}
    






