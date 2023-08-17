import { FC, useMemo, useState } from 'react';
import { THEME_LOCAL_STORAGE, Theme, ThemeContext } from '../lib/themeContext';

const defaultTheme = (localStorage.getItem(THEME_LOCAL_STORAGE) as Theme) || Theme.DARK;
const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const defaultProps = useMemo(
        () => ({ theme, setTheme }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
