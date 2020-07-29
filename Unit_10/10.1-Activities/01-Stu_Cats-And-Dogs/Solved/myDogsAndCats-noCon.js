const dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function (){
        if(this.raining === true){
            console.log(this.noise);
        }
    }
};


const cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function (){
        if(this.raining === true){
            console.log(this.noise);
        }
    }
};
//make the dog bark

dogs.makeNoise();
//make the cat meow
cats.raining = true;
cats.makeNoise();


function massHysteria(dogs, cats){
    if((dogs.raining && cats.raining) === true){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    };
}
