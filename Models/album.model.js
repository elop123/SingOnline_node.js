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
      .select('id, artists(name)')
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

}
