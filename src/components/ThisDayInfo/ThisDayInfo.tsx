import { ThisDayItem } from "./ThisDayItem";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../assets/images/cloud.png";

export interface Item {
  icon_id: string;
  iname: string;
  value: string;
  feels_like: number;
  temp: number;
  pressure: number;
  description: string;
  speed: number;
  deg: number;
}

const ThisDayInfo = ({temp, speed, deg, description, feels_like, pressure}: Item) => {


  function windDirection(deg: number) {
    if ((deg >= 0 && deg <= 22.5) || (deg > 337 && deg <= 360)) {
      return "северный";
    } else if (deg > 45 && deg <= 67.5) {
      return "северо-восточный";
    } else if (deg > 67.5 && deg <= 112) {
      return "восточный";
    } else if (deg > 112 && deg <= 140) {
      return "юго-восточный";
    } else if (deg > 140 && deg <= 202) {
      return "южный";
    } else if (deg > 202 && deg <= 247) {
      return "юго-западный";
    } else if (deg > 247 && deg <= 292) {
      return "западный";
    } else if (deg > 292 && deg <= 337) {
      return "северо-западный";
    } else {
      return null
    }
  }

  const direction = windDirection(deg);
console.log('OSADKI :' + description)
  const items = [
    {
      icon_id: "temp",
      iname: "Температура",
      value: `${temp}° - ощущается как ${feels_like}°`,
    },
    {
      icon_id: "pressure",
      iname: "Давление",
      value: `${pressure} мм ртутного столба - нормальное`,
    },
    {
      icon_id: "precipitation",
      iname: "Осадки",
      value: `${description}`,
    },
    {
      icon_id: "wind",
      iname: "Ветер",
      value: `${speed} м/с ${direction} - легкий ветер`,
    },
  ];

  return (
    <>
      <div className={s.this_day_info}>
        <div className={s.this_day_info_items}>
          {items.map((value,index) => (
            <ThisDayItem key={index} iname={value.iname} value={value.value} icon_id={value.icon_id} />
          ))}
            {/* <ThisDayItem key={item.icon_id} item={item} /> */}

        </div>
        <img src={cloud} className={s.cloud__img} alt="облако" />
      </div>
    </>
  );
};
export default ThisDayInfo;
