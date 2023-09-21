import styled from '@emotion/styled';

export const StyledReveal = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${props => props.marginbottom};
  }
`;
