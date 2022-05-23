import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

const fetch_event = async (idTokenResult) => {
    // let response = await axios.get(`${BASE_URL}newsevent/getNewsByCategory`,{
    //     category:category,
    // });
    let response = await axios.get(`${BASE_URL}event/fetchAll`,{
        headers: {
          authorization: `Bearer ${idTokenResult.token}`
        }
      });
    return response;
}

export default fetch_event;