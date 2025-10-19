import { setItemOnStorage } from "../../../global/lib";

const toggleTheme = (theme, setTheme) => {
  if (theme === 'dark') {
    setTheme('light');
    setItemOnStorage('theme', 'light');
  } else {
    setTheme('dark');
    setItemOnStorage('theme', 'dark');
  }
}

export { toggleTheme }