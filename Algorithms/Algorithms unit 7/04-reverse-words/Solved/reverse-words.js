// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function(str) {
  var words = str.split(" ");
  var reversedWords = words.reverse();

  return reversedWords.join(" ");
};


function FirstReverse(str) { 

  // code goes here  
  var tomatoes = [];
for (i = str.length - 1; i > -1; i--){
  tomatoes.push(str[i]);
}
str = tomatoes.join('');
 
  return str; 
         
}