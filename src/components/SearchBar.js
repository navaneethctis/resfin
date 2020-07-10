import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ findRestaurants, setQuery, value }) => (
  <View style={styles.container}>
    <Feather name='search' style={styles.icon} />
    <TextInput
      onChangeText={setQuery}
      onEndEditing={findRestaurants}
      placeholder='Search'
      style={styles.input}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    borderRadius: 4,
    flexDirection: 'row',
    height: 48,
    marginBottom: 8,
    marginHorizontal: 16,
    marginTop: 16
  },
  icon: {
    alignSelf: 'center',
    fontSize: 32,
    marginHorizontal: 8
  },
  input: {
    flex: 1,
    fontSize: 16
  }
});

export default SearchBar;
