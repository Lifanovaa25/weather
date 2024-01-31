export type Weather = {
  dt: number;
  name: string;
  weather: {
    [0]: {
      description: string;
      main: string;
    };
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};
// export type WeatherWeek = {
//   list: {
//     dt: number;
//     name: string;
//     weather: {
//       [0]: {
//         description: string;
//         main: string;
//       };
//     };
//     main: {
//       temp: number;
//       feels_like: number;
//       pressure: number;
//     };
//     wind: {
//       speed: number;
//       deg: number;
//     };
//   };
// };
