import fs from 'node:fs';

fs.writeFile('hello.txt', "Hello, It's my first file in Node.", (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.appendFile("hello.txt", "\n\nWrote my first line above.. !!", (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.rename("hello.txt", "renamed.txt", (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.mkdir('./copyFile', (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.copyFile('renamed.txt', './copyFile/hello.txt', (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.unlink('./copyFile/hello.txt', (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.rm('./copyFile', { recursive : true }, (err) => {
    err ? console.error(err.message) : console.log("Done !!");
});

fs.readFile('./README.md',  (err, data) => {
    err ? console.error(err.message) : console.log(data.toString());
})

// Creating a folder and reading it.

fs.mkdir("./copyFile", (err) => {
    err ? console.error(err.message) : console.log("Done 1 !!");
});

fs.writeFile("./copyFile/hello.txt", "Making it to perform readdir method", (err) => {
    err ? console.error(err.message) : console.log("Done 2 !!");
});

// Reading the directory

fs.readdir('./copyFile', (err, files) => {
    err ? console.error(err.message) : console.log(files);
});