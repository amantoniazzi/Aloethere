import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import PlantItem from './PlantItem';

const PlantList = ({ plants }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={plants}
        keyExtractor={(plant) => plant}
        renderItem={({ plant }) => <PlantItem name={plant} />}
      />
    </SafeAreaView>
  );
};

export default PlantList;
