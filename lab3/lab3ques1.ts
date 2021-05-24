
function University(name:number, dept:string) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year:number) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
let miu = new University ("miu1", "Computer Science"); 
miu.graduation(2019);