// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    for (var i=0; i<str.length; i++){
        var forwaedletter=str[i];
        var backwardletter=str[str.length - 1 - i];
        if(forwaedletter===backwardletter){
            return true;
        }
        else if (forwaedletter !== backwardletter ){
            return false; 
        }
    }
};
console.log(isPalindrome("racecar"));
