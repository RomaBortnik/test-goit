import styled from '@emotion/styled';
import { sizes, devices } from 'styles';

export const Container = styled.div`
  padding: 0 8px;
  margin: 0 auto;
  width: 100%;
  @media screen and (${devices.mobile}) {
    width: ${sizes.mobile};
  }

  @media screen and (${devices.tablet}) {
    width: ${sizes.tablet};
    padding: 0 12px;
  }

  @media screen and (${devices.desktop}) {
    width: ${sizes.desktop};
    padding: 0 16px;
  }
`;
