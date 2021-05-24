 
class BaseObject{
	width:number;
	length:number
	constructor(width:number=0,length:number=0){
		this.width=width;
		this.length=length;
	}
}
class Rectangle extends BaseObject{
	constructor(width:number, lenght:number){
		super(width,length)
	}
	calcSize():number{
		return this.width * this.length; 
	}
}
let rectangle=new Rectangle(5,2)
console.log(rectangle.calcSize()); //10.00