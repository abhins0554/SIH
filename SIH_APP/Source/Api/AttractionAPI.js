import { BASE_URL } from "../Constant/Constant"

export const _fetchAttractionDataByCategory = async () => {
    let response = await axios.get(`${BASE_URL}attraction/getAttractionByCategory`);
    return response;
}