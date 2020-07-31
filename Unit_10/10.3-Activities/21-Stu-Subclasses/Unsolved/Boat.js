const Vehicle = require("./vehicle");
class Boat extends Vehicle {
    constructor(id,crew){
        super(id, 0, "bwom");
        this.crew = crew;
    }
    crewSoundOff(){
        this.crew.forEach((member) => {
            
        
            console.log(`${member.name} reporting for duty!`);
        
    });
}
    useHorn() {
        console.log(this.sound);
    }
}