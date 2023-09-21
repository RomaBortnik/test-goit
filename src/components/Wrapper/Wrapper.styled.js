import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const StyledWrapper = styled.div`
  color: ${props => props.theme.colors.mainTextColor};
  transition: color ${baseTransition};
`;
