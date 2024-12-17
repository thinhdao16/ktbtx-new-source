import axios from "axios";

export const getHouseModelRandom = async (count: number) => {
  const response = await axios.post("https://fhomebe.onrender.com/get-house-model-random", {
    count:count,
  });
  return response.data.data;
};
