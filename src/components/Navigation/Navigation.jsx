import ThemeSwitcher from 'components/ThemeSwitcher';
import { sections } from 'utils/sections';
import { NavList, NavListItem } from './Navigation.styled';

const Navigation = ({ onThemeChange, onClose }) => {
  return (
    <NavList>
      {sections.map((section, index) => (
        <NavListItem onClick={onClose} key={index}>
          <a href={`#${section.toLowerCase()}`}>{section}</a>
        </NavListItem>
      ))}
      <NavListItem>
        <ThemeSwitcher onThemeChange={onThemeChange} />
      </NavListItem>
    </NavList>
  );
};

export default Navigation;
