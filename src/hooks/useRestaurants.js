import { useEffect, useState } from 'react';

import zomato from '../api/zomato';

const useRestaurants = () => {
  const [hasError, setHasError] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    findRestaurants('Cheese');
  }, []);

  const findRestaurants = async query => {
    try {
      const { data } = await zomato.get('/search', {
        params: { count: 20, q: query }
      });

      setRestaurants(data.restaurants);

      setHasError(false);
    } catch (error) {
      console.log(error.message);

      setHasError(true);
    }
  };

  return [hasError, restaurants, findRestaurants];
};

export default useRestaurants;
