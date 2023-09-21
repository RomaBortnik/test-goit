import Reveal from 'components/Reveal';
import Section from 'components/Section/Section';
import SectionContainer from 'components/SectionContainer';
import SectionTitle from 'components/SectionTitle';
import { education } from 'utils/education';
import EducationItem from './EducationItem';

const SectionEducation = () => {
  return (
    <Section id={'education'}>
      <SectionContainer>
        <Reveal>
          <SectionTitle>Education</SectionTitle>
        </Reveal>
        <ul>
          {education.map(el => (
            <Reveal key={el.id} marginBottom={'60px'}>
              <EducationItem education={el}></EducationItem>
            </Reveal>
          ))}
        </ul>
      </SectionContainer>
    </Section>
  );
};

export default SectionEducation;
