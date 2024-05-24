import express from 'express';
import ProfileModel from '../Models/profile.model.js';
export const ProfileController = express.Router();

ProfileController.post('/profiles', async (req, res) => {
	const data = await ProfileModel.createRecord(req.body)
	res.send(data)
	console.log(req.body);
 });

ProfileController.get('/profiles', async (req, res) => {
    const data = await ProfileModel.getAllRecords()
    res.send(data)
    console.log(req.body);
});

ProfileController.put('/profiles', async (req, res) => {
	console.log(req.body);
	const data = await ProfileModel.updateRecord(req.body)
    res.send(data)
 });

ProfileController.delete('/profiles', async (req, res) => {
	console.log(req.body);
	const data = await ProfileModel.deleteRecord(req.body)
    res.send(data)
 });