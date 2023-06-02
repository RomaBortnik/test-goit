import axios from 'axios';

axios.defaults.baseURL = 'https://6478842a362560649a2def56.mockapi.io/';

const fetchTweets = async () => {
  const response = await axios.get('users');
  return response.data;
};

export default fetchTweets;
