

// function reset() {
//     document.getElementById("display_value").innerHTML = "";
// }

// function addValue(value) {
//    let lastCharacter = document.getElementById("display_value").innerHTML;
//    if (lastCharacter.slice(-1) == "+" && (value == "+" || value == "-" || value == "*" || value == "/")
//         || lastCharacter.slice(-1) == "-" && (value == "-" || value == "+" || value == "*" || value == "/")
//         || lastCharacter.slice(-1) == "*" && (value == "*" || value == "+" || value == "-" || value == "/")
//         || lastCharacter.slice(-1) == "/" && (value == "/" || value == "+" || value == "-" || value == "*")) {
//     return false;
//    }
   
// function equals() {
//     let result = document.getElementById("display_value").innerHTML;
    
//     document.getElementById("display_value").innerHTML  = eval(result);
// }



const calculator = {
    reset: function() {
        document.getElementById("display_value").innerHTML = "";
    },
    addValue: function(value) {
        let lastCharacter = document.getElementById("display_value").innerHTML;
        if (lastCharacter.slice(-1) == "+" && (value == "+" || value == "-" || value == "*" || value == "/")
             || lastCharacter.slice(-1) == "-" && (value == "-" || value == "+" || value == "*" || value == "/")
             || lastCharacter.slice(-1) == "*" && (value == "*" || value == "+" || value == "-" || value == "/")
             || lastCharacter.slice(-1) == "/" && (value == "/" || value == "+" || value == "-" || value == "*")) {
             return false;
             }
             document.getElementById("display_value").innerHTML += value;
             console.log(typeof value);
    },
    equals: function() {
        let result = document.getElementById("display_value").innerHTML;
        
        document.getElementById("display_value").innerHTML  = eval(result);
    }
}; 
      
