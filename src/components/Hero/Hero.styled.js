import styled from '@emotion/styled';
import { devices } from 'styles';

export const SectionHero = styled.section`
  padding-top: 60px;

  @media screen and (${devices.tablet}) {
    padding-top: 0;
  }
`;

export const HeroContainer = styled.ul`
  font-family: 'Architects Daughter';

  @media screen and (${devices.tablet}) {
    display: grid;
    grid-template-columns: 45% 55%;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;

  @media screen and (${devices.tablet}) {
    font-size: 28px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 44px;
  }
`;

export const HeroMainText = styled.p`
  font-size: 60px;
  margin-bottom: 12px;

  @media screen and (${devices.tablet}) {
    font-size: 54px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;
