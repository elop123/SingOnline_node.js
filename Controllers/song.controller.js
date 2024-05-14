import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
	const data = await SongModel.getAllRecords()
	res.send(data)
});