import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const ThemeSwicher = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>{themeName}</button>;
};

export default ThemeSwicher;
