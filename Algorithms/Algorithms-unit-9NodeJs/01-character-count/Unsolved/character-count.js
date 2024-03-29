// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let result = {};
    for(var i= 0; i < str.length; i++){
        let char = str[i];
        if (char in result) {
            result[char]++;
          } else {
            result[char] = 1;
          }
    }
    return result;
};
