import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const TopButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  background: ${props => props.theme.colors.accentTextColor};
  cursor: pointer;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${baseTransition};
  color: ${props => props.theme.colors.scrollTopIconFill};
  z-index: 999;
`;
