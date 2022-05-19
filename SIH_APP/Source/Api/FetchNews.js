import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const fetch_news = async (category) => {
    // let response = await axios.get(`${BASE_URL}newsevent/getNewsByCategory`,{
    //     category:category,
    // });
    let response = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`)
    return response;
}

export default fetch_news;