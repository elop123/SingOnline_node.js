  import express from 'express';
  import ArtistModel from '../Models/artist.model.js';
  export const ArtistController = express.Router();

  ArtistController.get('/artists', async (req, res) => {
 	const data = await ArtistModel.getAllArtists()
 	res.send(data)
 });