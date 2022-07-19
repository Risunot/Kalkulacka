

function reset() {
    document.getElementById("display_value").innerHTML = "";
}

//ak sa rovna znak povolit iba jeden
function addValue(value) {
   let lastCharacter = document.getElementById("display_value").innerHTML;
   if (lastCharacter.slice(-1) == "+" && (value == "+" || value == "-" || value == "*" || value == "/")
        || lastCharacter.slice(-1) == "-" && (value == "-" || value == "+" || value == "*" || value == "/")
        || lastCharacter.slice(-1) == "*" && (value == "*" || value == "+" || value == "-" || value == "/")
        || lastCharacter.slice(-1) == "/" && (value == "/" || value == "+" || value == "-" || value == "*")) {
    return false;
   }
   
   document.getElementById("display_value").innerHTML += value;
   console.log(typeof value)
}

function equals() {
    let result = document.getElementById("display_value").innerHTML;
    
    document.getElementById("display_value").innerHTML  = eval(result);
}

//todo: dorobit vytrcanie z kontextu displaya  lamanie riadku v css ked je moc dlhy text