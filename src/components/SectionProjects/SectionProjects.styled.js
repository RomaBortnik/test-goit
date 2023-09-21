import styled from '@emotion/styled';
import { devices } from 'styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProjectList = styled.ul`
  @media screen and (${devices.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 32px;
  }

  @media screen and (${devices.desktop}) {
    grid-column-gap: 60px;
    grid-row-gap: 48px;
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  margin-right: 32px !important;
  background: transparent !important;
  width: 65% !important;
  height: 100% !important;

  @media screen and (${devices.tablet}) {
    margin-right: 40px !important;
    width: 75% !important;
  }

  // @media screen and (${devices.desktop}) {
  //   margin-right: 80px !important;
  //   width: 50% !important;
  // }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100% !important;
  height: 100% !important;
  padding: 24px 0 !important;
`;
