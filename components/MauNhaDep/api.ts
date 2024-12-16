import axios from "axios";

export const getHouseModel = async (type: string) => {
  const response = await axios.post("https://fhomebe.onrender.com/getXdndProject", {
    type:type,
  });
  return response.data.data.postings;
};
