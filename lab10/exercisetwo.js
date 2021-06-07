function message(msg){
    this.msg=msg;
    this.logger=()=>console.log('message:'+this.msg);
}

function log(message1,name){
    this.msg=message1.msg;
    this.name=name;
    this.logger=()=>console.log(`Message: ${this.msg} ${this.name}`);
}

const message1=new message('You are my son');
message1.logger();

const logger1=new log(message1,'mahalaleel');
logger1.logger();