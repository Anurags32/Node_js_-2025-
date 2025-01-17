// import eventemitter class
const EventEmitter = require("events");
// create instance of event emitter
const emitter = new EventEmitter();
// define event listener

const fs = require('fs');
const filePath = './eventcounter.json';

emitter.on("greet", () => {
    console.log("anurag tiwari");
});
emitter.on("add", () => {
    var ab = 4 + 6;
    console.log(ab);
});
emitter.on("profile-update", () => { });
emitter.emit("greet");
emitter.emit("add");


// chalanging session 


// const eventcounter = {
//     "user-login": 0,
//     "user-logout": 0,
//     "user-purches": 0,
//     "profile-update": 0,

// }

let eventcounter;
if (fs.existsSync(filePath)) {
    eventcounter = JSON.parse(fs.readFileSync(filePath, 'utf8'));
} else {
    eventcounter = {
        "user-login": 0,
        "user-logout": 0,
        "user-purches": 0,
        "profile-update": 0,
    };
}

const saveCounter = () => {
    fs.writeFileSync(filePath, JSON.stringify(eventcounter, null, 2));
};
emitter.on("user-login", (username) => {
    eventcounter["user-login"]++;
    console.log(` ${username} loged in`);
    saveCounter();

});


emitter.on("user-logout", (username) => {
    eventcounter["user-logout"]++;
    console.log(` ${username} loged out`);
    saveCounter();
});
emitter.on("user-purches", (username, product) => {
    eventcounter["user-purches"]++;
    console.log(` ${username} purches this devise ${product}`,);
    saveCounter();
});
emitter.on("profile-update", (username) => {
    eventcounter["profile-update"]++;
    console.log(`${username} update profile name`)
    saveCounter();
});
emitter.on("summary", () => {
    console.log(eventcounter);
});

emitter.emit("user-login", "Anurag");
emitter.emit("user-logout", "Anurag");
emitter.emit("user-purches", "Anurag", "MotoG85");
emitter.emit("profile-update", "Anurag Tiwari");
emitter.emit("summary");