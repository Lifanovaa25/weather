import axios from "axios";

const REACT_APP_API_KEY = "b891376b86159a5ba2bf73664ed205b7";
const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  config.url = REACT_APP_API_URL+ "&units=metric" + "&cnt=3&appid=" + REACT_APP_API_KEY;
  console.log(config.url);
  return config;
});

export default api;
