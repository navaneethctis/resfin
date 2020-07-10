import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import zomato from '../api/zomato';

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    findRestaurant();
  }, []);

  const findRestaurant = async () => {
    const id = navigation.getParam('id');

    const { data } = await zomato.get(`/restaurant?res_id=${id}`);

    setRestaurant(data);
  };

  if (!restaurant) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.thumb }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.label}>Timings</Text>
      <Text>{restaurant.timings}</Text>
      <Text style={styles.label}>Highlights</Text>
      <FlatList
        data={restaurant.highlights}
        keyExtractor={highlight => highlight}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16
  },
  image: {
    borderRadius: 4,
    height: 160,
    width: 160
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8
  }
});

export default RestaurantScreen;
