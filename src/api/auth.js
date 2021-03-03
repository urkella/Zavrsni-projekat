import axios from "axios";

const DIAMOND_API = process.env.REACT_APP_DIAMOND_API;

// get all users from JSON-SERVER
export const getUsers = () => axios.get(`${DIAMOND_API}/users`);

// add new user to JSON-SERVER
export const addUser = (params) =>
  axios.post(`${DIAMOND_API}/users`, {
    ...params,
  });
