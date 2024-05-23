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
					description: formdata.description,
					created_at:formdata.created_at
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
	}static async updateArtist(formdata){
		try{
			let { data, error } = await supabase
				.from('artists')
				.update([
					{
						name: formdata.name,
						image: formdata.image,
						description: formdata.description,
						artists_id: formdata.artist_id
					}
				])
				.eq('id', formdata.id);
			
				if(error) {
					throw new Error(error.message)
				} else {
					return data
				}
	
			 } catch (error) {
				console.error(`Fejl i opdatering af artist: ${error}`)
			}
	}
	static async deleteArtist(formdata) {
	try{
		let { data, error } = await supabase
		.from('artists')
		.delete()
		.eq('id', formdata.id)
	if(error) {
			throw new Error(error.message)
			} else {
				return data
			}
		 } catch (error) {
			console.error(`Fejl i slettelse af artist: ${error}`)
		}
	   }
	   
}

	

