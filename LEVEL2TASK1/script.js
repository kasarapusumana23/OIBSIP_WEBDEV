const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }

}

display.addEventListener("keydown", function(event){

    const allowedKeys = [

        "0","1","2","3","4",
        "5","6","7","8","9",

        "+","-","*","/","%",
        ".","(",")",

        "Backspace",
        "Delete",

        "ArrowLeft",
        "ArrowRight",

        "Tab"

    ];

    if(event.key === "Enter"){

        event.preventDefault();

        calculate();

        return;

    }

    if(!allowedKeys.includes(event.key)){

        event.preventDefault();

    }

});