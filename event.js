// import eventemitter class
const EventEmitter = require("events");
// create instance of event emitter
const emitter = new EventEmitter();
// define event listener

emitter.on("greet", () => {
    console.log("anurag tiwari");
});
emitter.on("add", () => {
    var ab = 4 + 6;
    console.log(ab);
})
emitter.emit("greet");
emitter.emit("add");