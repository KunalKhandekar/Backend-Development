import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello World !!\nCreated my first Server....');
});

server.listen(3000);

console.log("Server Running on http://localhost:3000/");