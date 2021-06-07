function RegularBulbs(options){
    this.lumens>=50;
    this.lumens<=100;
    longerUse=1; 
}

function energySaverBulbs(options){
    this.lumens>=5;
    this.lumens<=10;
    longerUse=10; 
    
}

const factory=function(options){
    if((50<=options.lumens<100) || options.longerUse===1){
        return new RegularBulbs();
    }else if((5<=options.lumens<10) || options.longerUse===10){
        return new energySaverBulbs();
    }
}

let bestBulb=factory({lumens:40,longerUse:10});
console.log(bestBulb);