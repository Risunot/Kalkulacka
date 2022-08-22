
const Calculator = (function () {
    const reset = function() {
        document.getElementById("display_value").innerHTML = "";
    }
    
    const addValue = function(value) {
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
    
    const equals = function() {
        let result = document.getElementById("display_value").innerHTML;
        
        document.getElementById("display_value").innerHTML  = eval(result);
    }

    return {
        reset: reset,
        addValue: addValue,
        equals: equals
    }
}())


