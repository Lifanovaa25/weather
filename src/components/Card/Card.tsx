import { FC } from "react";
import s from "./Header.module.scss";
interface WProps {
  temp: number;
  city: string;
  country: string;
  sunrise:string| number;
  sunset: string| number;
}

const Card: FC<WProps> = ({ temp, city, country, sunrise, sunset }) => {
  return (
    <>
      <div>{temp}</div>
      <div>{city}</div>
      <div>{country}</div>
      <div>{sunrise}</div>
      <div>{sunset}</div>
    </>
  );
};
export default Card;
