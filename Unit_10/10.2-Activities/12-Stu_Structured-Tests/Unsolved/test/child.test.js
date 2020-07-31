const Child = require("../child");

describe("Child", () => {
    describe("Initialization", () => {
        // Positive Test
        it("should create an object with a name and age if provided valid arguments", () => {
            // Arrange
            const name = "Haset";
            const age = "3";

            // Act
            const child = new Child(name , age);

            //Assert
            expect(child instanceof Child).toEqual(true);
            expect("name" in child).toEqual(name);
            expect("age" in child).toEqual(age);
            expect(child.name).toEqual(name);expect(child.age).toEqual(age);
        });

        //Exeption Test
        it("should throw an error if provided no arguments", () => {
            // Arrange|| Act
            const cb = () => new Child();
            const nameErr = "Error name should be non empty string";
            const ageErr = "Error age parameter should not be a negative";
            const cbNoage = new Child("Name");
            // Assert
            expect(cb).toThrowError(nameErr);
            expect(cbNoage).toThrowError(ageErr);
        });
    })
});
