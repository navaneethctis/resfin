import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import useRestaurants from '../hooks/useRestaurants';

import RestaurantsList from '../components/RestaurantsList';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const [query, setQuery] = useState('');

  const [hasError, restaurants, findRestaurants] = useRestaurants();

  const filterRestaurantsByPriceRange = priceRange =>
    restaurants.filter(
      ({ restaurant }) =>
        restaurant.price_range === priceRange && restaurant.thumb
    );

  return (
    <>
      <SearchBar
        findRestaurants={() => findRestaurants(query)}
        setQuery={setQuery}
        value={query}
      />
      {hasError && <Text>Something went wrong.</Text>}
      <ScrollView>
        <RestaurantsList
          restaurants={filterRestaurantsByPriceRange(1)}
          title='Cost Effective'
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPriceRange(2)}
          title='Bit Pricier'
        />
        <RestaurantsList
          restaurants={filterRestaurantsByPriceRange(3)}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
