import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View } from 'react-native';
import ApiService from '../services/ApiService';
import PlantList from '../components/PlantList.js';
import Filter from '../components/Filter';

const Search = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setfilteredPlants] = useState([]);

  useEffect(() => {
    const data = ApiService.getPlants();
    setPlants(data);
    setfilteredPlants(data);
  }, []);

  const filterPlants = (plantFilter) => {
    filteredPlants.filter((plant) => {
      let plantLight = plant.light.toLowerCase();
      return plantLight.indexOf(plantFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredPlants,
    });
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Filter />
        </View>
        <View>
          <PlantList plants={filteredPlants} filterPlants={filterPlants} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
