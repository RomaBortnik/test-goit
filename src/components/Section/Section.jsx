import { StyledSection } from './Section.styled';

const Section = ({ id, children }) => {
  return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
