const http = require('http');

const server = http.createServer((req,res) => {
    let chunks = [];
    req.on('data', (chunk) => {
        chunks.push(chunk);
    });
    req.on('end', () => {
        const body = Buffer.concat(chunks).toString();

        if(req.url == '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the homepage!');
        } else if (req.url == '/about') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({name: 'Albert', role: 'Developer', location: 'World'}));
        } else if (req.url == '/echo') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({method: req.method, url: req.url, body: body}));
        }else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
        }
    })


});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

