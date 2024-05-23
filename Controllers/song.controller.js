import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

 SongController.get('/songs', async (req, res) => {
 	const data = await SongModel.getAllRecords()
 	res.send(data)
});

SongController.get('/songs/:id', async (req, res) => {
	const data = await SongModel.getRecordById(req.params.id)
	res.send(data);
	console.log(req.params);
});

SongController.post('/songs', async (req, res) => {
	const data = await SongModel.createRecord(req.body)
	res.send(data)
	console.log(req.body);
 });

 SongController.put('/songs', async (req, res) => {
	console.log(req.body);
	const data = await SongModel.updateRecord(req.body)
    res.send(data)
 });