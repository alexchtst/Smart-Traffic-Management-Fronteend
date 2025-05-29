import axios from "axios";

export async function FetchLocation() {
    const uri = `${process.env.NEXT_PUBLIC_API_URL}/region`

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

export async function FetchGuardPost() {
    const uri = `${process.env.NEXT_PUBLIC_API_URL}/guardpost`

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