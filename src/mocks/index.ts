import axios from "axios";

const api = axios.create({
  baseURL: "https://my.api.mockaroo.com/users.json?key=b5a138b0"
});

export default api;
