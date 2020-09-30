// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let camelStr = "";
    let words = str.toLowerCase().split(" ");
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("");
        if(i > 0){
            letters[0] = letters[0].toUpperCase();
        }
        camelStr += letters.join("");
    }
    return camelStr;
};
