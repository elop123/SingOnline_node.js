import { supabase } from '../Config/supabase.config.js'

export default class SongModel {
	static async getAllRecords() {
		try {
			const { data, error } = await supabase
				.from('songs')
				.select('id, title, content, created_at, artists(id, name)')
			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af sangliste: ${error}`)
		}
	}

	static async getRecordById(id) {
			try {
				const { data, error } = await supabase
					.from('songs')
					.select('id, title')
					.eq('id', id)
				if(error) {
					throw new Error(error)
				} else {
					return data
				}
			} catch (error) {
				console.error(`Fejl i kald af sang: ${error}`)
			}
		}
		static async createRecord(formdata) {
			try {
				const { data, error } = await supabase
				.from('songs')
				.insert([
					{
						title: formdata.title,
						content: formdata.content,
						lyrics: formdata.lyrics,
						artist_id: formdata.artist_id,
						created_at:formdata.created_at
					}
				])
				if(error) {
					throw new Error(error)
				} else {
					return data
				}
	
			 } catch (error) {
				console.error(`Fejl i oprettelse af sang: ${error}`)
			}
		}
	
	}

