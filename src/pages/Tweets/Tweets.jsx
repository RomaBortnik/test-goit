import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchTweets from 'services/fetchTweets';
import TweetList from 'components/TweetList';
import { UsertBtn } from 'components/TweetListItem/TweetListItem.styled';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await fetchTweets(pageNumber);
        setTweets(data);
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getTweets();
  }, [pageNumber]);

  console.log(tweets);
  return (
    <>
      <TweetList tweets={tweets} />
      <UsertBtn type="button">Load more</UsertBtn>
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Tweets;
