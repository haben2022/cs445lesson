
interface Vehicle{
	name:string;
	acceleration:number;
	 honk():string;
	 accelerate(speed:number):void;
}
class Car implements Vehicle{
    constructor(public name:string,public acceleration:number=0 ){

	}
	honk():string{
	 return ` ${this.name} is saying: Toooooooooot!`	
	}
	accelerate(speed:number):void{
		this.acceleration = this.acceleration + speed; 
	}
}
var car = new Car ("BMW"); 
car.honk(); // BMW is saying: Toooooooooot
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60