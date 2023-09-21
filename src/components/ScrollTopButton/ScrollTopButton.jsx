import { useState } from 'react';
import { useEffect } from 'react';
import { TopButton } from './ScrollTopButton.styled';
import SvgIcon from 'components/SvgIcon';
import icon from '../../icons/iconTop.svg';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <TopButton isVisible={isVisible} onClick={handleClick} style={{}}>
      <SvgIcon
        style={{ fill: 'black' }}
        w={60}
        h={60}
        use={`${icon}#upper-arrow`}
      />
    </TopButton>
  );
};

export default ScrollTopButton;
