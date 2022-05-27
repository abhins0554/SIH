import axios from "axios"
import { BASE_URL } from "../constant/constant"

export const get_Accommodation_Data = async () => {
    let response = await axios.get(`${BASE_URL}/accommodation/fetchAll`);
    return response;
}