const display= document.getElementById('display');

function ck(input){ 
    if(display.value==0){
        display.value=input;
    }
    else{
        display.value += input;
    }
}

function clc(){

    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error';
    }

}

function cr(){
    display.value=0;
}