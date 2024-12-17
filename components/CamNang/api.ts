import { data } from "./../MauNhaDep/data";
import axios from "axios";

export const getHandBook = async (type: string) => {
  const response = await axios.post(
    "https://fhomebe.onrender.com/get-handbook",
    {
      type: type,
    },
  );
  return response.data.data;
};
export const getHandBookRandoom = async (count: number) => {
  const response = await axios.post(
    "https://fhomebe.onrender.com/get-handbook-random",
    {
      count: count,
    },
  );
  return response.data.data;
};
