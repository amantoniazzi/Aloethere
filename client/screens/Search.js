import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import ApiService from '../services/ApiService';
import PlantList from '../components/PlantList.js';
import Filter from '../components/Filter';

const Search = () => {
  const [plants, setPlants] = useState([]);

  const fetchPlants = useCallback(() => {
    ApiService.getPlants()
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  // const filterPlants = (plantFilter) => {
  //   filteredPlants.filter((plant) => {
  //     let plantLight = plant.light.toLowerCase();
  //     return plantLight.indexOf(plantFilter.toLowerCase()) !== -1;
  //   });
  //   this.setState({
  //     filteredPlants,
  //   });
  // };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Filter />
        </View>
        <View>
          <PlantList plants={plants} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
