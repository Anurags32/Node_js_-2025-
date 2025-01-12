const { error } = require('console');
const fs = require('fs');
const { console } = require('inspector');
const path = require('path');

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);
console.log(__dirname);

const writeFile = fs.writeFileSync(
    filePath,
    "this is initial data",
    "utf-8"
);
console.log(writeFile);


const readfile = fs.readFileSync(filePath, "utf-8");
console.log(readfile);

const appenddata = fs.appendFileSync(
    filePath,
    "\nupdated data",
    "utf-8"
)
console.log(appenddata);

// const deletfile = fs.unlinkSync(filePath);

// console.log(deletfile);


// when try and catch use karne ke lie ham promisses use karte hai
const filepName = __dirname;
// const filepPath = path.join(__dirname, filepName);
fs.promises.readFile(filepName).then((data) => console.log(data)).catch((error) => console.error(error));