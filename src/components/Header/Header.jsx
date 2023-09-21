import Headroom from 'react-headroom';
import SectionContainer from 'components/SectionContainer';
import { HeaderContainer, Logo, StyledHeader } from './Header.styled';
import SvgIcon from 'components/SvgIcon';
import sprite from '../../images/icons.svg';
import { useEffect, useState } from 'react';
import { sizes } from 'styles';
import BurgerMenu from 'components/BurgerMenu';
import Navigation from 'components/Navigation';

const Header = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const body = document.querySelector('body');

  useEffect(() => {
    const handleScreenWidth = event => {
      const viewportWidth = parseInt(event.target.innerWidth);
      if (viewportWidth >= parseInt(sizes.tablet)) {
        setIsMenuOpen(false);
      }
      if (
        viewportWidth >= parseInt(sizes.tablet) &&
        body.classList.contains('backdrop')
      ) {
        body.classList.remove('backdrop');
      }
      setScreenWidth(viewportWidth);
    };
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [body.classList]);

  const toggleMenu = () => {
    body.classList.toggle('backdrop');
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
        <StyledHeader>
          <SectionContainer>
            <HeaderContainer>
              <Logo href="/">Logo</Logo>
              {screenWidth >= parseInt(sizes.tablet) ? (
                <nav>
                  <Navigation onThemeChange={onThemeChange}></Navigation>
                </nav>
              ) : (
                <>
                  <button type="button" onClick={toggleMenu}>
                    <SvgIcon
                      w={40}
                      h={40}
                      use={`${sprite}#icon-menu`}
                    ></SvgIcon>
                  </button>
                </>
              )}
            </HeaderContainer>
          </SectionContainer>
        </StyledHeader>
      </Headroom>
      <BurgerMenu
        onThemeChange={onThemeChange}
        menuStatus={isMenuOpen}
        onClose={toggleMenu}
      ></BurgerMenu>
    </>
  );
};

export default Header;
