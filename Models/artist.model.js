import {supabase} from '../Config/supabase.config.js'

export default class ArtistModel {
  static async getAllArtists() {
    try {
        const {data , error} = await supabase
        .from('artists')
        .select('id')
        .select('name')
        if (error){
            throw new Error (error)
        }else{
            return data
        }
    }catch (error){
       console.log(`Fejl i kald af artists:${error}`)
    }
  }
static async getAllArtists(){

}
}