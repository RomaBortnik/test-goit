import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledSection = styled.section`
  padding-top: 40px;

  @media screen and (${devices.tablet}) {
    padding-top: 80px;
  }

  @media screen and (${devices.desktop}) {
    padding-top: 100px;
  }
`;
