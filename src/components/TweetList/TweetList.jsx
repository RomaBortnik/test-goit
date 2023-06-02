import TweetListItem from 'components/TweetListItem';
import { StyledContactList } from './TweetList.styled';

const TweetList = ({ tweets }) => {
  return (
    <StyledContactList>
      {tweets.map(({ user, tweets, id, avatar }) => (
        <TweetListItem
          key={id}
          name={user}
          tweets={tweets}
          avatar={avatar}
        ></TweetListItem>
      ))}
    </StyledContactList>
  );
};

export default TweetList;
