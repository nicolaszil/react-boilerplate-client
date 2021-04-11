import client from "../utils/axios";
import { App as endpoints } from "../../config/api/endpoints";
import { formatSomething } from "../data";

export const getSomethingFromYourApi = async (updater) => {
  try {
    const { data } = await client.get(endpoints.getSomethingFromYourApi);
    const something = formatSomething(data);
    updater(something);
  } catch (error){
    console.log(error)
  }
};