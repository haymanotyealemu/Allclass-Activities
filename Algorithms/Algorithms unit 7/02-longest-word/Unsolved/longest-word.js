// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
    let words = str.split(" ");
    let longesWord = words[0];
    for(let i = 1; i < words.length; i++){
        let currentWord = words[i];
        if(currentWord.length > longesWord.length){
            longesWord = currentWord;
        }
   
    }
    return longesWord;
};
