import HeroAnimation from 'components/HeroAnimation';
import Reveal from 'components/Reveal';
import SectionContainer from 'components/SectionContainer';
import TextAnimation from 'components/TextAnimation';
import { heroAnimatedText } from 'utils/heroAnimatedText';
import {
  HeroContainer,
  HeroMainText,
  HeroTextContainer,
  SectionHero,
} from './Hero.styled';

const Hero = () => {
  return (
    <SectionHero id={'about'}>
      <SectionContainer>
        <Reveal>
          <HeroContainer>
            <HeroTextContainer>
              <HeroMainText>Hello, World</HeroMainText>
              <p>
                I'm <TextAnimation text={heroAnimatedText} />
              </p>
            </HeroTextContainer>
            <HeroAnimation />
          </HeroContainer>
        </Reveal>
      </SectionContainer>
    </SectionHero>
  );
};

export default Hero;
