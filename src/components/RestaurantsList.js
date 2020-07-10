import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import RestaurantItem from './RestaurantItem';

const RestaurantsList = ({ navigation, restaurants, title }) => {
  if (!restaurants.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={restaurants}
        horizontal
        keyExtractor={({ restaurant }) => restaurant.id}
        renderItem={({ index, item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantScreen', {
                id: item.restaurant.id
              })
            }
          >
            <RestaurantItem
              count={restaurants.length}
              index={index}
              restaurant={item.restaurant}
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 16
  }
});

export default withNavigation(RestaurantsList);
