const express = require('express');
const server = express();


const port = 8080;

const data = require('./mvp.json');









// const http = require('http');
// const fs = require('fs');
 

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(express.static('public'));

// fs.readFile('index.html', (err, html) => {
//         if(err){
//             throw err;
//         }
//         const serverRender = http.createServer((req, res) => {
//             res.statusCode = 200;
//             res.setHeader('Content-type', 'test/html');
//             res.write(html);
//             res.end('');
//     });
// serverRender();
server.get('/mvp.json', (req, res) => {
    res.send(mvp);
});

server.get('/mvp/years/:year', (req, res) => {
        res.send(`mvps ${req.params.year}`)
    })
    
server.get('/mvp/players/:player', (req, res) => {
    const {player} = req.params.name;
    res.send(`Player Info: ${player}`);
});


    
server.listen(port,() => {
    console.log('Server started on port 8080');    
}); 
