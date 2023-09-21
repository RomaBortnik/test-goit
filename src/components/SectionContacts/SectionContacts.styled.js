import styled from '@emotion/styled';
import { devices } from 'styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSlide = styled(SwiperSlide)`
  margin-right: 32px !important;
  background: transparent !important;
  width: 65% !important;
  height: 412px !important;

  @media screen and (${devices.tablet}) {
    margin-right: 40px !important;
    width: 75% !important;
    height: 100% !important;
  }

  @media screen and (${devices.desktop}) {
    margin-right: 80px !important;
    width: 50% !important;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100% !important;
  height: 100% !important;
  padding: 24px 0 !important;
`;
