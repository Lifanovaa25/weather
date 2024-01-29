import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

const Header = () => {
  const options = [
    { value: "city-2", label: "Москва" },
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-3", label: "Новгород" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: " #4793FF33    ",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zInsex: 100,
    }),
  };
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
          <div className={s.change_theme}>
            <GlobalSvgSelector id="change-theme" />
          </div>
          <Select defaultValue={options[0]} styles={colourStyles} options={options} />
        </div>
      </header>
    </>
  );
};
export default Header;
