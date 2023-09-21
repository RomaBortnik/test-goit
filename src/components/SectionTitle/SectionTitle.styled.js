import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 72px;
  margin-bottom: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (${devices.tablet}) {
    text-align: left;
    padding-left: 24px;
  }

  @media screen and (${devices.desktop}) {
    padding-left: 48px;
  }
`;
