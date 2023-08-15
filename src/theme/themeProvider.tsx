import { FC, useMemo, useState } from "react";
import { THEME, Theme, ThemeContext } from "./themeContext";
const defaultTheme = (localStorage.getItem(THEME) as Theme) || Theme.DARK;
const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
