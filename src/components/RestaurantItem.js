import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const RestaurantItem = ({ count, index, restaurant }) => {
  if (!restaurant.thumb) return null;

  const containerStyle = !index
    ? styles.first
    : index === count - 1
    ? styles.last
    : styles.container;

  return (
    <View style={containerStyle}>
      <Image source={{ uri: restaurant.thumb }} style={styles.thumbnail} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.small}>
        Rating: {restaurant.user_rating.aggregate_rating} | Reviews:{' '}
        {restaurant.all_reviews_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    marginLeft: 16
  },
  last: {
    marginLeft: 8,
    marginRight: 16
  },
  container: {
    marginLeft: 8
  },
  thumbnail: {
    borderRadius: 4,
    height: 160,
    width: 160
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  small: {
    fontSize: 12
  }
});

export default RestaurantItem;
