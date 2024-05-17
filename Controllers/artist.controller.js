  import express from 'express';
  import ArtistModel from '../Models/artist.model.js';
  export const ArtistController = express.Router();

  ArtistController.get('/artists', async (req, res) => {
 	const data = await ArtistModel.getAllArtists()
 	res.send(data)
 });

 ArtistController.get('/artists/:id', async (req, res) => {
	const data = await ArtistModel.getArtistById(req.params.id)
	res.send(data);
  console.log(req.params);
});

ArtistController.post('/artists', async (req, res) => {
	const data = await ArtistModel.createArtist(req.body)
	res.send(data)
	console.log(req.body);
 });