import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.headerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.mainTextColor};
  box-shadow: ${props => props.theme.colors.mainShadow};

  transition: background-color ${baseTransition}, color ${baseTransition},
    box-shadow ${baseTransition};

  @media screen and (${devices.tablet}) {
    height: 64px;
  }

  @media screen and (${devices.desktop}) {
    height: 80px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 28px;
`;
