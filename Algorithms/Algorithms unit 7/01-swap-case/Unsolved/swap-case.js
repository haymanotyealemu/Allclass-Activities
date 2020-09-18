// Write code to create a function takes a string and returns the string with all of the letter cases swapped

var swapCase = function(str) {
    let result = "";
    for(let i = 0; i < str.length; i++){
        let letters = str[i];
        if(letters === letters.toUpperCase()){
            result += letters.toLowerCase();
        } else{
            result += letters.toUpperCase();
        }
    }
    return result;
};
