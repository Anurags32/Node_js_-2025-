const fs = require('fs');
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