import { FormEvent, useState } from "react";
import s from "./Form.module.scss";
import Card from "../Card/Card";
import React from "react";
import { getPosts } from "./../../api/requests";

const API_KEY = "b891376b86159a5ba2bf73664ed205b7";

// const gettingWeather = async (e: FormEvent<HTMLFormElement>) => {
//    const state = {
//     temp: null,
//     city: null,
//     country: null,
//     sunrise: null,
//     sunset: null,
//     errorr: null,
//   };
//   e.preventDefault();
//   const city = e.target.value;
//   const api_url = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${API_KEY}`
//   );
//   const data = await api_url.json();
//   console.log(data);
//   state.setState({
//     temp: data.main.temp,
//     city: data.name,
//     country: data.sys.country,
//     sunrise: data.sys.sunrise,
//     sunset: data.sys.sunset,
//     error: "",
//   });
// };

const Form = () => {
  const [weather, setWeather] = useState(false);

  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset] = useState("");
  const [errorr, setSunset] = useState("");
  function gettingWeather(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const data = getPosts(e.target.value).then((data) => {
      console.log(data?.data);
      setWeather(!weather);

      setTemp(data?.data.main.temp);
      setCity(data?.data.name);
      setCountry(data?.data.sys.country);
      setSunrise(data?.data.sys.sunrise);
      setSunset(data?.data.sys.sunset);
    });

    return data;
  }
  return (
    <>
      <form className={s.form}>
        <input
          className={s.input}
          type="text"
          name="city"
          placeholder="Введите название города"
          onChange={(e) => gettingWeather(e)}
        />
        <button className={s.btn} value={"Показать"}>
          Показать
        </button>
      </form>
      {weather && <Card temp={temp} city ={city} country={country} sunrise ={sunrise} sunset={sunset} />}
    </>
  );
};

export default Form;
