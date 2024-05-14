// import http from 'http';

//  const port = 3000;

// http.createServer((request, response) => {
//     console.log(`Webserver is running now on http://localhost:${port}`);
//     response.writeHead(200, {'Content-Type':'text/plain'});
//     response.write('Hello World');
//     response.end();
// }).listen(port)

import express from 'express'
import dotenv from 'dotenv'
import {supabase} from './Config/supabase.config.js';
import SongModel from './Models/song.model.js'
import ArtistModel from './Models/artist.model.js'
import AlbumModel from './Models/albums.model.js'
import {SongController} from './Controllers/song.controller.js'


const app = express() 
dotenv.config()

const port = process.env.PORT

app.use(SongController)

app.get('/',(req, res)=>{
    console.log(req.query);
  res.send('Forside')
})

app.post('/', (req, res)=>{
    res.send('Endpoint til POST')
})

app.get('/test', async (req, res)=>{
    const { data, error} = await supabase
    .from ('songs')
    .select('title')
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})

app.get('/artist', async (req, res)=>{
    const { data, error} = await supabase
    .from ('artists')
    .select('id, name')
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})

app.get('/albums', async (req, res)=>{
    const { data, error} = await supabase
    .from ('albums')
    .select('id, title' )
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})


app.listen(3000, ()=>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})