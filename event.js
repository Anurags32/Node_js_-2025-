// import eventemitter class
const EventEmitter = require("events");
// create instance of event emitter
const emitter = new EventEmitter();
// define event listener
const eventcounter = {
    "user-login": 0,
    "user-logout": 0,
    "user-purches": 0,
    "profile-update": 0,

}


emitter.on("greet", () => {
    console.log("anurag tiwari");
});
emitter.on("add", () => {
    var ab = 4 + 6;
    console.log(ab);
});
emitter.on("user-login", (username) => {
    console.log("${username} loged in")
});
emitter.on("user-logout", () => {

});
emitter.on("user-purches", () => {

});
emitter.on("profile-update", () => { });
emitter.emit("greet");
emitter.emit("add");
emitter.emit("user-login", "Anurag");
emitter.emit("user-logout", "Anurag");
emitter.emit("user-purches", "Anurag", "MotoG85");
emitter.emit("profile-update", "Anurag Tiwari");
