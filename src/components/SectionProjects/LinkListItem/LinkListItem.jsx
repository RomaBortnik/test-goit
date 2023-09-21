import SvgIcon from 'components/SvgIcon';
import { LinkItem, LinkRef, LinkText } from './LinkListItem.styled';

const LinkListItem = ({ project }) => {
  const { link, icon, name } = project;

  return (
    <LinkItem>
      <LinkRef href={link} target="_blank">
        <SvgIcon w={20} h={20} use={icon} />
        <LinkText>{name}</LinkText>
      </LinkRef>
    </LinkItem>
  );
};

export default LinkListItem;
