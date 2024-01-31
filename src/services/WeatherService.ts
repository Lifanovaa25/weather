import { AxiosResponse } from 'axios';
import api from 'axios';
import { Weather } from '../store/types/types';
const REACT_APP_API_KEY = "79d51fe457af99121a3086c652b6a395";
const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
export class WeatherService {
  static getCurrentWeather(city: string | undefined): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`${REACT_APP_API_URL}/weather?q=${city}&lang=ru&units=metric&appid=${REACT_APP_API_KEY}`);
  } 
  // static getCurrentWeatherWeek(city: string | undefined): Promise<AxiosResponse<Weather>> {
  //   return api.get<Weather>(`${REACT_APP_API_URL}/forecast?q=${city}&lang=ru&units=metric&appid=${REACT_APP_API_KEY}`);
  // }
}
