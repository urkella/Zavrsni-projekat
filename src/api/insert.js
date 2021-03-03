import axios from "axios";

const DIAMOND_API = process.env.REACT_APP_DIAMOND_API;

// insert new food in JSON-SERVER
export const addFood = (params) =>
  axios.post(`${DIAMOND_API}/food`, {
    ...params,
  });
