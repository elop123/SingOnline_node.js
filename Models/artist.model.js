import { supabase } from '../Config/supabase.config.js'

export default class ArtistModel {
	static async getAllArtists() {
		try {
			const { data, error } = await supabase
				.from('artists')
				.select('id, name')
			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af artister: ${error}`)
		}
	}

	static async getArtistById(id) {
		try {
			const { data, error } = await supabase
				.from('artists')
				.select('id, name')
				.eq('id', id)
			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af artistliste: ${error}`)
		}
	}
	static async createArtist(formdata) {
		try {
			const { data, error } = await supabase
			.from('artists')
			.insert([
				{
					name: formdata.name,
					image: formdata.image,
					description: formdata.description
				}
			])
			if(error) {
				throw new Error(error)
			} else {
				return data
			}

		 } catch (error) {
			console.error(`Fejl i oprettelse af artist: ${error}`)
		}
	}

}

	

