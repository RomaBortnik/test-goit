import { AnimatedText } from './TextAnimation.styled';

const TextAnimation = ({ text }) => {
  return <AnimatedText sequence={text} speed={20} repeat={Infinity} />;
};

export default TextAnimation;
