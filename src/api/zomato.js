import axios from 'axios';

const zomato = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '98b21d9926133e8e45fd42e0b0448217'
  }
});

export default zomato;
