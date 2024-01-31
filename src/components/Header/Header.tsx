import { useEffect } from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";
import { WeatherService } from "../../services/WeatherService";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";

export const Header = () => {
  const theme = useTheme();
  // const [theme, setTheme] = useState("dark");
  const options = [
    { value: "Москва", label: "Москва" },
    { value: "Санкт-Петербург", label: "Санкт-Петербург" },
    { value: "Новгород", label: "Новгород" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    // setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;
    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      );
      // alert(component)
    });
  });
  return (
    <>
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <GlobalSvgSelector id="header-logo" />
          </div>
          <div className={s.title}>Прогноз погоды</div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme" />
          </div>
          <Select
            defaultValue={options[0]}
            styles={colourStyles}
            options={options}
            onChange={(selectedOption) => {
              WeatherService.getCurrentWeather(selectedOption?.value);
              fetchCurrentWeather(selectedOption?.value);
            }}
          />
        </div>
      </header>
    </>
  );
};
export default Header;
