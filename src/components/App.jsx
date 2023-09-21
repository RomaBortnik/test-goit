import Header from './Header';
import SectionEducation from './SectionEducation';
// import SectionExperience from './SectionExperience';
import Hero from './Hero';
import SectionProjects from './SectionProjects';
import ScrollTopButton from './ScrollTopButton';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { theme } from 'styles';
import { StyledWrapper } from './Wrapper/Wrapper.styled';
import { STORAGE_KEY } from './ThemeSwitcher/ThemeSwitcher';
import Particle from './Particle';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return value ? { ...theme[value] } : { ...theme.dark };
  });

  const handleTheme = value => {
    value === 'dark'
      ? setCurrentTheme({ ...theme.dark })
      : setCurrentTheme({ ...theme.light });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledWrapper>
        <Particle theme={currentTheme}></Particle>
        <Header onThemeChange={handleTheme} />
        <main>
          <Hero />
          <SectionEducation />
          {/* <SectionExperience /> */}
          <SectionProjects />
          <ScrollTopButton />
        </main>
      </StyledWrapper>
    </ThemeProvider>
  );
};
