import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';

import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import ProjectItem from 'components/SectionProjects/ProjectItem';
import { projects } from 'utils/projects';
import { StyledSwiper, StyledSlide } from './SectionContacts.styled';

const SectionContacts = () => {
  return (
    <Section id={'contacts'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Contacts</SectionTitle>
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
        </Reveal>
      </SectionContainer>
    </Section>
  );
};

export default SectionContacts;
