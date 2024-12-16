import axios from "axios";

export const getHouseModel = async (type: string) => {
  const response = await axios.post("http://localhost:5000/getXdndProject", {
    type:type,
  });
  return response.data.data.postings;
};
