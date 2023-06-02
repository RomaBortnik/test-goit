import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchTweets from 'services/fetchTweets';
import TweetList from 'components/TweetList';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await fetchTweets();
        setTweets(data);
      } catch (error) {
        return toast.error('Something went wrong. Please try again.');
      }
    };
    getTweets();
  }, []);

  console.log(tweets);
  return (
    <>
      <div>Tweets page</div>
      <TweetList tweets={tweets} />
      <ToastContainer autoClose={2000} theme="dark"></ToastContainer>
    </>
  );
};

export default Tweets;
