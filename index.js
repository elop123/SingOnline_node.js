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

app.get('/song', async (req, res)=>{
    const { data, error} = await supabase
    .from ('songs')
    .select('id, title')
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
    .select('id, name, description, created_at, image')
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})

app.get('/album', async (req, res)=>{
    const { data, error} = await supabase
    .from ('albums')
    .select('title, image, artist_id(name)')
    if (error){
        console.log(error)
    }else{
        console.log(data)
        res.send(data)
    }
})

//Model
app.get('/songs', async (req, res) => {
    let songs = await SongModel.getAllRecords();
    console.log(songs);
   })

app.get('/artists', async (req, res) => {
    let artists = await ArtistModel.getAllArtists();
    console.log(artists);
  });

app.get('/albums', async (req, res) => {
    let albums = await AlbumModel.getAllAlbums();
    console.log(albums);
  });


app.listen(3000, ()=>{
    console.log(`Webserver is running now on http://localhost:${port}`);
})