const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
  it("should take a string as an argument and return a new reversed version of the string.", () => {
  const str = "Hello World!";
  const reversed = "!dlroW olleH";
  const result = new Algo().reverse(str);
  expect(result).toEqual(reversed);
  });
  
  });

  describe("isPalindrome", () => {
   
  });

  describe("capitalize", () => {
    
  });
});
