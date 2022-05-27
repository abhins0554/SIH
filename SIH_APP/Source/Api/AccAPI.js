import axios from "axios"
import { BASE_URL } from "../Constant/Constant"

export const getAccomodattion = async () => {
    let response = await axios.get(`${BASE_URL}accommodation/fetchAll`);
    return response;
}