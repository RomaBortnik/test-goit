import { Icon } from './SvgIcon.styled';

export const SvgIcon = ({ w, h, use }) => {
  return (
    <Icon width={w} height={h}>
      <use href={use} />
    </Icon>
  );
};

export default SvgIcon;
