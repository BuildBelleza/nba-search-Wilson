const express = require('express');
const server = express();

const hostname = '127.0.0.1';
const port = 8080;

const mvp = require('./mvp.json');

// fs.readFile('index.html', (err, html) => {
//         if(err){
//             throw err;
//         }
    //     const server = http.createServer((req, res) => {
    //         res.statusCode = 200;
    //         res.setHeader('Content-type', 'test/html');
    //         res.write(html);
    //         res.end('');
    // });

    server.get("/api/mvp/:year", (req, res) => {
        res.send(`mvps ${req.params.year}`)
    })
    
    server.get('/api/mvp/:player', (req, res) => {
        const {player} = req.params.name;
        res.send(`Player: ${player}`);
    });
    server.get('/mvp', (req, res) => {
        res.send(mvp);
    });
    
server.listen(port,() => {
    console.log('Server started on port '+port);    
}); 
