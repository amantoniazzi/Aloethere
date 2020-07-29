import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';

const PLANTS = ['Apples', 'Broccoli', 'Cookies', 'Doritos', 'Eclairs'];
const Search = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={PLANTS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default Search;
