import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import PlantItem from './PlantItem';

const PlantList = ({ plants }) => {
  console.log(plants);

  const renderItem = ({ item }) => (
    <PlantItem
      id={item._id}
      name={item.common_name}
      type={item.type}
      light={item.light}
      water={item.water}
      air_purifying={item.air_purifying}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        styles={styles.container}
        data={plants}
        keyExtractor={(plant) => plant._id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});

export default PlantList;
