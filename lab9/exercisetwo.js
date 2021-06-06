class Subject {
    observers = {};

    on(event, fn) {
        if (event in this.observers){
            this.observers[event].push(fn);
        }else {
    this.observers[event] = [];
    this.observers[event].push(fn);
  }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }

    off(event, fn) {
        let ind=this.observers[event].findIndex(fun=>fun===fn) 
  this.observers[event].splice(ind,1)
    }

}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana