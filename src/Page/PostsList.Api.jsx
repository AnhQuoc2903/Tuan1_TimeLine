import { Url } from "../services/ApiUrl";
import axiosFromBody from "../utils/axiosClient/formBody";

export const Post = async () => {
  try {
    const response = await axiosFromBody.get(`${Url.USER.POST}`);
    console.log("Response", response);
    
    if (response && response.data) {
      return response.data; 
    } else {
      console.error("No data received from the API");
      return [];
    }
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return [];
  }
};
