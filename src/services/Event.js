import axios from "axios";
import { baseUrl } from "../utilities/constants";

const getEvents = async (artistName) => {
  try {
    const response = await axios.get(
      `${baseUrl + artistName}/events?app_id=123`
    );
    return response;
  } catch (error) {
    alert(error.msg);
    return false;
  }
};

export { getEvents };
