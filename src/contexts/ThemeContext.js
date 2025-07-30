import { createContext, useContext, useEffect, useState } from 'react';

const themes = {
  theme1: {
    name: 'Theme 1',
    background: 'bg-white',
    text: 'text-black',
    font: 'font-sans',
    layout: 'p-4 grid grid-cols-1 md:grid-cols-2',
  },
  theme2: {
    name: 'Theme 2',
    background: 'bg-gray-900',
    text: 'text-white',
    font: 'font-serif',
    layout: 'p-4 flex flex-wrap gap-4 justify-center',
  },
  theme3: {
    name: 'Theme 3',
    background: 'bg-yellow-100',
    text: 'text-purple-800',
    font: 'font-["Pacifico"]',
    layout: 'p-4 grid grid-cols-2 md:grid-cols-4 gap-4',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState(localStorage.getItem('theme') || 'theme1');

  const setTheme = (key) => {
    setThemeKey(key);
    localStorage.setItem('theme', key);
  };

  useEffect(() => {
    localStorage.setItem('theme', themeKey);
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeKey], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);