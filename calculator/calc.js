const display=document.getElementById('display');
function append(input){
    display.value +=input;
}

function disClear(){
    display.value ="";
}


function result(){
    display.value=eval(display.value);
}