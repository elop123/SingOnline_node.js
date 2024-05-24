// Importing the Supabase client from the config file
import { supabase } from '../Config/supabase.config.js'

// Define the ProfileModel class
export default class ProfileModel {
 // Method to create a record in the 'profiles' table
	static async createRecord(formdata) {
        try {
            console.log(formdata);
            const { data, error } = await supabase
            .from('profiles')   
            .insert([
                {
                    created_at:formdata.created_at,
                    first_name:formdata.first_name,
                    middle_name:formdata.middle_name,
                    last_name:formdata.last_name,
                    address:formdata.address,
                    zip_code:formdata.zip_code,
                    city: formdata.city,
                    country:formdata.country,
                    email: formdata.email,
                    telephone: formdata.telephone,
                    gender:formdata.gender,
                    date_of_birth:new Date(formdata.date_of_birth)
                }
            ])
            if(error) {
                console.log(error);
                throw new Error(error.message)
            } else {
                return data
            }

         } catch (error) {
            console.error(`Fejl i oprettelse af record: ${error}`)
        }
    }
 // Method to retrieve all records from the 'profiles' table
    static async getAllRecords() {
		try {
			const { data, error } = await supabase
				.from('profiles')
				.select('id,created_at,first_name,middle_name,last_name,address,zip_code,city,country,email,telephone,gender,date_of_birth')
			if(error) {
				throw new Error(error)
			} else {
				return data
			}
		} catch (error) {
			console.error(`Fejl i kald af recordliste: ${error}`)
		}
	}
// Method to update an existing record in the 'profiles' table
    static async updateRecord(formdata){
        try{
            let { data, error } = await supabase
                .from('profiles')
                .update([
                    { id: formdata.id,
                        created_at:formdata.created_at,
                        first_name:formdata.first_name,
                        middle_name:formdata.middle_name,
                        last_name:formdata.last_name,
                        address:formdata.address,
                        zip_code:formdata.zip_code,
                        city: formdata.city,
                        country:formdata.country,
                        email: formdata.email,
                        telephone: formdata.telephone,
                        gender:formdata.gender,
                        date_of_birth:formdata.date_of_birth
                        
                    }
                ])
                .eq('id', formdata.id);
            
                if(error) {
                    throw new Error(error.message)
                } else {
                    return data
                }
    
             } catch (error) {
                console.error(`Fejl i opdatering af record: ${error}`)
            }
    }
 // Method to delete a record in the 'profiles' table
    static async deleteRecord(formdata) {
		try{
			let { data, error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', formdata.id)
		if(error) {
			throw new Error(error.message)
			} else {
				return data
			}
		 } catch (error) {
			console.error(`Fejl i slettelse af record: ${error}`)
		}
		   }
}