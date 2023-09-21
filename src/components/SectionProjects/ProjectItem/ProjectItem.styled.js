import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const Project = styled.li`
  position: relative;
  height: 412px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.colors.mainShadow};
  transition: transform ${baseTransition};

  &:hover {
    transform: scale(1.05);
  }

  &:hover .overlay {
    transform: scale(1);
  }

  &:hover .thumb {
    filter: blur(4px);
  }

  @media screen and (${devices.nottabletanddesktop}) {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }

  @media screen and (${devices.tablet}) {
    border-radius: 24px;
    height: 264px;
  }

  @media screen and (${devices.desktop}) {
    height: 320px;
  }
`;

export const ProjectThumb = styled.div`
  width: 100%;
  height: 100%;
  transition: filter ${baseTransition};
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.projectOverlayBgd};
  color: #fff;
  text-align: justify;
  padding: 12px;
  font-size: 20px;
  border-radius: 12px;
  transform: scale(0);
  transition: transform ${baseTransition};
  font-family: 'Architects Daughter';
  display: flex;
  flex-direction: column;

  @media screen and (${devices.tablet}) {
    border-radius: 24px;
    padding: 16px;
  }

  @media screen and (${devices.desktop}) {
    padding: 16px 24px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;

  @media screen and (${devices.tablet}) {
    font-size: 28px;
    margin-bottom: 12px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 32px;
  }
`;

export const ProjectDescr = styled.p`
  font-size: 14px;

  @media screen and (${devices.tablet}) {
    font-size: 16px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 20px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: auto auto 0;

  @media screen and (${devices.tablet}) {
    margin-right: 0;
    gap: 16px;
  }
`;
