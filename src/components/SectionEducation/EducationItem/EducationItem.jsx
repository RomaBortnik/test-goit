import {
  Item,
  ItemContainer,
  Logo,
  Info,
  Title,
  Degree,
  Descr,
  DecorativeLine,
} from './EducationItem.styled';

const EducationItem = ({ education }) => {
  const { id, name, degree, period, logo, altText } = education;
  return (
    <Item>
      <ItemContainer>
        {id === 'goit' ? (
          <Logo src={logo} alt={altText} />
        ) : (
          <Logo className="nulp-logo" src={logo} alt={altText} />
        )}

        <Info>
          <Title>{name}</Title>
          <Degree>{degree}</Degree>
          <Descr>{period}</Descr>
        </Info>
      </ItemContainer>
      <DecorativeLine className="line" />
    </Item>
  );
};

export default EducationItem;
