const http = require("http");
// const { console } = require("inspector");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("my name is anurag tiwari");
        res.end();
    }
});
// ye exactly event emiter hai


// create web server

const PORT = 3000;
server.addListener(PORT, () => {
    console.log(`lisent this ${PORT}`);
});