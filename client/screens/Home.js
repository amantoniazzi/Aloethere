import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.push('Search')}>
      <View style={styles.text}>
        <Text> Homeee! 🌿 </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default Home;
