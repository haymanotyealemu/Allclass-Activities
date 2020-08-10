const Vehicle = require("./vehicle");
class Car extends Vehicle {
    constructor(id, color, passengers){
        super(id, 4, "beep");
        this.color = color;
        this.passengers = passengers;
        
    }
    checkPassengers(){
        if(this.passengers.length <= 3){
            console.log(`You can add ${4 - this.passengers.length}`);
        }
        else{
            console.log("there are too many passengers");
        }
    }
    useHorn(){
        console.log(this.sound);
    }
    
}
