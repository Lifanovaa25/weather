import axios from "axios";
const API_KEY = "b891376b86159a5ba2bf73664ed205b7";
const API_URL = `https://api.openweathermap.org/data/2.5`;

const FIRST_API_URL = "https://jsonplaceholder.typicode.com/";
const SECOND_API_URL = "http://fakerapi.it/api/v1/";
// export const getPosts = axios({url:`${FIRST_API_URL}/posts`, method:'GET', params:{offset:0 ,limit:10}})
export const getPosts = async (city: (EventTarget & HTMLInputElement) | undefined) => {
  try {
    const res = await axios({
      url: `${API_URL}/weather?q=${city}&lang=ru&appid=${API_KEY}`,
    //   method: "GET",
      params: { offset: 0, limit: 10 },
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    //   timeout:1000,
    });
    // console.log(res.data);
    return res;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data.errText, "error");
    } else if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
