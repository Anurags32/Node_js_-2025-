// import eventemitter class
const EventEmitter = require("events");
// create instance of event emitter
const emitter = new EventEmitter();
// define event listener

emitter.on("greet",()=>{
    console.log("anurag tiwari");
});

emitter.emit("greet");