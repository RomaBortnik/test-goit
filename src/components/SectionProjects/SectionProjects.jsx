import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';

import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import { useEffect, useState } from 'react';
import { sizes } from 'styles';
import { projects } from 'utils/projects';
import ProjectItem from './ProjectItem';
import {
  ProjectList,
  StyledSlide,
  StyledSwiper,
} from './SectionProjects.styled';

const SectionProjects = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth);
    return () => window.removeEventListener('resize', handleScreenWidth);
  }, [screenWidth]);

  const handleScreenWidth = event => {
    setScreenWidth(event.target.innerWidth);
  };

  return (
    <Section id={'projects'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Projects</SectionTitle>
          {parseInt(screenWidth) >= parseInt(sizes.desktop) ? (
            <ProjectList>
              {projects.map(project => (
                <ProjectItem key={project.id} project={project}></ProjectItem>
              ))}
            </ProjectList>
          ) : (
            <StyledSwiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
              slidesPerView={'auto'}
              centeredSlides={true}
              loop={true}
            >
              {projects.map(project => (
                <StyledSlide key={project.id}>
                  <ProjectItem project={project}></ProjectItem>
                </StyledSlide>
              ))}
            </StyledSwiper>
          )}
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionProjects;
