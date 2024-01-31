import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./ThisDay.module.scss";
import { Weather } from "../../store/types/types";

import ReactTimeConvertor from 'react-time-convertor'
interface Props {
  weather: Weather;
}

const ThisDay = ({ weather }: Props) => {
  const date = weather.dt;
  const cityName = weather.name
  return (
    <>
      <div className={s.this_day}>
        <div className={s.top_block}>
          <div className={s.top_block_wrapper}>
            <div className={s.this_temp}>{Math.floor(weather.main.temp)}°</div>
            {/* <div className={s.this_temp}>{weather.main.temp}°</div> */}
            <div className={s.this_day_name}>Сегодня</div>
          </div>
          <GlobalSvgSelector id={weather.weather?.[0].main} />
        </div>

        <div className={s.bottom_block}>
          <div className={s.this_time}>
            {/* Время  */}
            <span>
            <ReactTimeConvertor timestamp={weather.dt} format="chat | general | greet" platform = "mobile" />
   
            </span>
          </div>
          <div className={s.this_city}>
            Город <span>{cityName}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ThisDay;
