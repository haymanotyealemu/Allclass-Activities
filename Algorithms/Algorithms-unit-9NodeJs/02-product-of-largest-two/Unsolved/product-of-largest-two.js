// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    let num1 = null;
    let num2 = null;
    
    for (let i= 0; i < arr.length; i++){
        if(arr[i] > num1 || num1 === null){
            num2 = num1;
            num1 = arr[i];
        } else if(arr[i] > num2 || num2 === null){
            num2 = arr[i];
        }
    }
    return num1 * num2;
};
console.log(productOfLargestTwo([1,2,3,4,5]));
