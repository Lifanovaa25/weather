import { useEffect } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "./hooks/store";
import { selectCurrentWeatherData } from "./store/selectors";
import { fetchCurrentWeather } from "./store/thunks/fetchCurrentWeather";

function App() {
  // useEffect(() => {
  //   // getPosts.then((res) => console.log(res)).catch((err) => console.log(err));
  //   getPosts();
  // },[]);

  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(
    selectCurrentWeatherData
    // state => state.currentWeatherSliceReducer
  );
  useEffect(() => {
    dispatch(fetchCurrentWeather("moscow"));
  }, []);
  const temp = Math.floor(weather.main?.temp);
  const feels_like = Math.floor(weather.main?.feels_like);
  const pressure = Math.floor(weather.main?.pressure);

  const description = weather.weather?.[0].description;

  const speed = Math.floor(weather.wind?.speed);
  const deg = Math.floor(weather.wind?.deg);

  return (
    <>
      <div className="container">
        <Header />
        <div className="day_wrapper">
          <ThisDay weather={weather} />
          <ThisDayInfo
            description={description}
            speed={speed}
            deg={deg}
            pressure={pressure}
            temp={temp}
            feels_like={feels_like}
            value={""}
            icon_id={""}
            iname={""}
          />
        </div>
        {/* <Form /> */}
        <Days />
      </div>
    </>
  );
}

export default App;
