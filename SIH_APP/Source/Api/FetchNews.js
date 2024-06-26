import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const fetch_news = async (idTokenResult) => {
    // let response = await axios.get(`${BASE_URL}newsevent/getNewsByCategory`,{
    //     category:category,
    // });
    let response = await axios.get(`${BASE_URL}news/fetchAll`,{
        headers: {
          authorization: `Bearer ${idTokenResult.token}`
        }
      });
    return response;
}

export default fetch_news;