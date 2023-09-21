import { CloseBtn, MenuBackdrop, MenuContainer } from './BurgerMenu.styled';
import sprite from '../../images/icons.svg';
import SvgIcon from 'components/SvgIcon';
import Navigation from 'components/Navigation';

const BurgerMenu = ({ menuStatus, onClose, onThemeChange }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <MenuBackdrop
      onClick={handleBackdropClick}
      className={`${menuStatus ? 'active' : 'not-active'}`}
    >
      <MenuContainer>
        <CloseBtn type="button" onClick={() => onClose()}>
          <SvgIcon w={40} h={40} use={`${sprite}#icon-close-big`}></SvgIcon>
        </CloseBtn>
        <nav>
          <Navigation
            onClose={onClose}
            onThemeChange={onThemeChange}
          ></Navigation>
        </nav>
      </MenuContainer>
    </MenuBackdrop>
  );
};

export default BurgerMenu;
