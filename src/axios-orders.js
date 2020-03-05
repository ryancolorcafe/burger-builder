import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-e2e5f.firebaseio.com/'
});

export default instance;
