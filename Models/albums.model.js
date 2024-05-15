import {supabase} from '../Config/supabase.config.js'

export default class AlbumModel {
  static async getAllAlbums() {
    try {
        const {data , error} = await supabase
        .from('albums')
        .select('id, title, artist_id(name), release_at')
        if (error){
            throw new Error (error)
        }else{
            return data
        }
    }catch (error){
       console.log(`Fejl i kald af albums:${error}`)
    }
  }
static async getAlbumById(){

}
}