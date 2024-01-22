import { useContext } from "react";
import { ThemeContext } from "./BookList";

const ThemeSwitcher = () => {
  const themeValue = useContext(ThemeContext);
  return themeValue;
};

export default ThemeSwitcher;
