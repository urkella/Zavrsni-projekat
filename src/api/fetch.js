import axios from "axios";

const DIAMOND_API = process.env.REACT_APP_DIAMOND_API;

// Fetch food from JSON-SERVER
// Limit is optional
export const getFood = (limit, sort, order) =>
  axios.get(`${DIAMOND_API}/food?_sort=${sort}&_order=${order}`, {
    params: {
      _limit: limit,
    },
  });

// Fetch food by ID from JSON-SERVER
export const getFoodById = (id) => axios.get(`${DIAMOND_API}/food/${id}`);

// Fetch current user added food from JSON-SERVER
export const getFoodByUserId = (userId, sort, order) =>
  axios.get(
    `${DIAMOND_API}/food?userId=${userId}&_sort=${sort}&_order=${order}`
  );
