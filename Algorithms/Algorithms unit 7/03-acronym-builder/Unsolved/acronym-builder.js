// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    let words = str.split(" ");
    let result = " ";
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        result += word[0].toUpperCase();
        
    }
    return result;
};
console.log(acronymBuilder("hello world"));
