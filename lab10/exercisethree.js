class Console{
    consoleType="";
    setStrategy(consoleType){
        this.consoleType=consoleType;
    }
    choosePrintType(message){
        
    }
    logging(msg) {
        this.consoleType.logging(msg);
    }
 
}
class Table {
    logging(msg) {
        console.table(msg);
    }
}


const strategy = new Console();

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
