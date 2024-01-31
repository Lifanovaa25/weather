import { AxiosResponse } from 'axios';
import api from 'axios';
import { Weather } from '../store/types/types';
const REACT_APP_API_KEY = "b891376b86159a5ba2bf73664ed205b7";
const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5/";
export class WeatherService {
  static getCurrentWeather(city: string | undefined): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`${REACT_APP_API_URL}/weather?q=${city}&cnt=3&lang=ru&units=metric&appid=${REACT_APP_API_KEY}`);
  }
}
