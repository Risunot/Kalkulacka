const operators = ["+", "-", "*", "/"];

function reset() {
    document.getElementById("display_value").textContent = "";
}

function equals() {
    let result = document.getElementById("display_value").textContent;
    
    document.getElementById("display_value").textContent  = eval(result);
}

function addNumber(value) {
    document.getElementById("display_value").textContent += value;
}

function addOperator(value) {
    let lastCharacter = document.getElementById("display_value").textContent.slice(-1);
    
    if(!operators.includes(lastCharacter)) {
       document.getElementById("display_value").textContent += value;
    }   
}
