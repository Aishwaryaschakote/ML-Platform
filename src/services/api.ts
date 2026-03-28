import axios from "axios";

export const predict = async (endpoint: string, data: any) => {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
