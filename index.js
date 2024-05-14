// import http from 'http';

//  const port = 3000;

// http.createServer((request, response) => {
//     console.log(`Webserver is running now on http://localhost:${port}`);
//     response.writeHead(200, {'Content-Type':'text/plain'});
//     response.write('Hello World');
//     response.end();
// }).listen(port)

import express from 'express'

const app = express()
const port = 3000

app.get('/',(req, res)=>{
    console.log(req.query);
  res.send('Forside')
})

app.post('/', (req, res)=>{
    res.send('Endpoint til POST')
})

app.listen(3000, ()=>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})