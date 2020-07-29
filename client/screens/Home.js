import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push('Search')}>
      <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Home;
