import styled from '@emotion/styled';
import { TypeAnimation } from 'react-type-animation';
import { devices } from 'styles';

export const AnimatedText = styled(TypeAnimation)`
  font-size: 30px;
  font-family: 'Architects Daughter';
  background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (${devices.tablet}) {
    font-size: 28px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 44px;
  }
`;
