import {supabase} from '../Config/supabase.config.js'

export default class AlbumModel {
  static async getAllAlbums() {
    try {
        const {data , error} = await supabase
        .from('albums')
        .select('title')
        if (error){
            throw new Error (error)
        }else{
            return data
        }
    }catch (error){
       console.log(`Fejl i kald af albums:${error}`)
    }
  }
static async getAllAlbums(){

}
}