import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const Item = styled.li`
  &:hover .line {
    width: 100%;
    background: ${props => props.theme.colors.accentTextColor};
  }
`;

export const ItemContainer = styled.div`
  margin-bottom: 24px;
  @media screen and (${devices.tablet}) {
    display: grid;
    align-items: center;
    grid-template-columns: 40% 60%;
    margin-bottom: 32px;
  }
`;

export const Logo = styled.img`
  max-width: 65%;
  margin: 0 auto 24px;

  @media screen and (${devices.tablet}) {
    width: 360px;
    height: auto;
    margin: 0 auto;
  }

  &.nulp-logo {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media screen and (${devices.tablet}) {
      border-top-left-radius: 80px;
      border-top-right-radius: 80px;
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }
`;

export const Info = styled.div`
  text-align: center;
  max-width: 100%;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 12px;

  @media screen and (${devices.tablet}) {
    font-size: 46px;
    margin-bottom: 16px;
  }

  @media screen and (${devices.tablet}) {
    font-size: 48px;
  }
`;

export const Degree = styled.p`
  font-size: 30px;
  margin-bottom: 12px;

  @media screen and (${devices.tablet}) {
    margin-bottom: 16px;
  }
`;

export const Descr = styled.p`
  font-size: 22px;
  color: grey;

  @media screen and (${devices.tablet}) {
    font-size: 26px;
  }
`;

export const DecorativeLine = styled.div`
  margin: 0 auto;
  height: 2px;
  width: 75%;
  background-color: grey;
  transition: width ${baseTransition}, background ${baseTransition};
`;
