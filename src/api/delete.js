import axios from "axios";

const DIAMOND_API = process.env.REACT_APP_DIAMOND_API;

// delete food from JSON-SERVER
export const deleteFood = (id) =>
  axios({
    method: "DELETE",
    url: `${DIAMOND_API}/food/${id}`,
  });
