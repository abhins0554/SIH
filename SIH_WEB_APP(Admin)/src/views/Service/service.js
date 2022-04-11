import axios from "axios";

const base_url = "https://developmentserver.quickblog.tech";

const _get_all_user = async () => {
  let response = await axios.get(`${base_url}/user/selectuser`);
  return response;
}

export default {_get_all_user,};