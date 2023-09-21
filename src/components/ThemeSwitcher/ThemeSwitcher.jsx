import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

export const STORAGE_KEY = 'theme';

const ThemeSwitcher = ({ onThemeChange }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const theme = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return theme ? theme : 'dark';
  });
  const handleThemeChange = () => {
    if (currentTheme === 'dark') {
      onThemeChange('light');
      setCurrentTheme('light');
      localStorage.setItem(STORAGE_KEY, JSON.stringify('light'));
    } else {
      onThemeChange('dark');
      setCurrentTheme('dark');
      localStorage.setItem(STORAGE_KEY, JSON.stringify('dark'));
    }
  };
  return (
    <div
      className="container"
      data-darkmode={currentTheme}
      onClick={handleThemeChange}
      style={{
        justifyContent: currentTheme === 'dark' ? 'flex-end' : 'flex-start',
      }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className={`icon fi-rr-${currentTheme === 'dark' ? 'moon' : 'sun'}`}
            key={currentTheme === 'dark' ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.i>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
