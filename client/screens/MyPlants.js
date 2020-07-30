import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const MyPlants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>here are my plants! 🌿</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default MyPlants;
