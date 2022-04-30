import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const fetch_news = async (category) => {
    let response = await axios.get(`http://localhost:5000/newsevent/getNewsByCategory`,{
        category:category,
    });
    return response;
}

export default fetch_news;