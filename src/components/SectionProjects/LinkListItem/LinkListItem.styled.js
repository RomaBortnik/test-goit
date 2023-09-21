import styled from '@emotion/styled';
import { devices, baseTransition } from 'styles';

export const LinkItem = styled.li`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 10px;
  transition: background-color ${baseTransition}, box-shadow ${baseTransition};

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 2px 4px -1px rgba(255, 255, 255, 0.2),
      0px 4px 5px 0px rgba(255, 255, 255, 0.14),
      0px 1px 10px 0px rgba(255, 255, 255, 0.12);
  }

  @media screen and (${devices.tablet}) {
    border-radius: 8px;
    // padding: 4px;
  }
`;

export const LinkRef = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  @media screen and (${devices.tablet}) {
    gap: 8px;
  }
`;

export const LinkText = styled.p`
  font-size: 14px;

  @media screen and (${devices.tablet}) {
    font-size: 16px;
  }
`;
