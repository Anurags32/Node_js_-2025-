const http = require("http");
// const { console } = require("inspector");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("my name is anurag narendra tiwari ");
        res.end();
    };
    if (req.url === "/anurag") {

        res.write("Experienced Flutter developer with a strong grasp of Dart programming language and expertise  in integrating RESTful APIs, third-party libraries, and Firebase services. Proficient in SDLC and agile methodologies. Strong problem-solving skills and ability to work collaboratively in a team   environment. Seeking challenging opportunities to build innovative mobile applications");
        res.end();
    }
});
// ye exactly event emiter hai


// create web server

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`lisent this ${PORT}`);
});