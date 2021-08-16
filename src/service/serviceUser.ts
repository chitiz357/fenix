import axios from "axios";

export const getAllUser = () => {
  const response = axios.get("https://bryan-test28.herokuapp.com/api/users");
  return response.then((response) => response.data);
};
