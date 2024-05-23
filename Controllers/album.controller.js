 import express from 'express';
 import AlbumModel from '../Models/album.model.js';
 export const AlbumController = express.Router();

 AlbumController.get('/albums', async (req, res) => {
	const data = await AlbumModel.getAllAlbums()
 	res.send(data)
});

AlbumController.get('/albums/:id', async (req, res) => {
	const data = await AlbumModel.getAlbumById(req.params.id)
	res.send(data);
	console.log(req.params);
});

AlbumController.post('/albums', async (req, res) => {
	const data = await AlbumModel.createAlbum(req.body)
	res.send(data)
	console.log(req.body);
 });

AlbumController.put('/albums', async (req, res) => {
	console.log(req.body);
	const data = await AlbumModel.updateAlbum(req.body)
    res.send(data)
 });