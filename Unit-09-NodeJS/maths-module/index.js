var maths = require("./maths");
var operation = process.argv[2];
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);
switch(operation){
    case 'sum' : console.log(maths.operations.sum(numOne,numTwo));
    break;
    case 'diffrence' : console.log(maths.operations.diffrence(numOne,numTwo));
    break;
    case 'product' : console.log(maths.operations.product(numOne,numTwo));
    break;
    case 'quotient' : console.log(maths.operations.quotient(numOne,numTwo));
}