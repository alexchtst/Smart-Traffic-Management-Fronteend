import axios from "axios";

export async function FetchLocation() {
    const uri = "http://127.0.0.1:5000/region"

    try {
        const datafetch = await axios.get(uri);
        if (datafetch.status !== 200){
            return {
                msg: 'gagal mengambil data'
            }
        } else {
            return datafetch.data
        }
    } catch (error) {
        throw error
    }
    
}