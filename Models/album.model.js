import { supabase } from '../Config/supabase.config.js'

export default class AlbumModel {
  static async getAllAlbums() {
    try {
        const {data , error} = await supabase
        .from('albums')
        .select('id, title, artists(name), release_date')
        if (error){
            throw new Error (error)
        }else{
            return data
        }
    }catch (error){
       console.log(`Fejl i kald af albums:${error}`)
    }
  }
static async getAlbumById(id){
  try {
    const { data, error } = await supabase
      .from('albums')
      .select('id, title')
      .eq('id', id)
    if(error) {
      throw new Error(error)
    } else {
      return data
    }
  } catch (error) {
    console.error(`Fejl i kald af albumliste: ${error}`)
  }
}
static async createAlbum(formdata) {
  try {
    const { data, error } = await supabase
    .from('albums')
    .insert([
      {
        title: formdata.title,
        description:formdata.description,
        image:formdata.image,
        release_date:formdata.release_date,
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
    console.error(`Fejl i oprettelse af album: ${error}`)
  }
}
static async updateAlbum(formdata){
  try{
    let { data, error } = await supabase
      .from('albums')
      .update([
        {
          title: formdata.title,
          description: formdata.description,
          image: formdata.image,
          release_date:formdata.release_date,
          artist_id: formdata.artist_id
        }
      ])
      .eq('id', formdata.id);
    
      if(error) {
        throw new Error(error.message)
      } else {
        return data
      }

     } catch (error) {
      console.error(`Fejl i opdatering af album: ${error}`)
    }
}

}
