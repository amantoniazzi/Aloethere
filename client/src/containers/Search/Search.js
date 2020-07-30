import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import PlantList from '../../components/PlantList/PlantList';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Search.css';

function Search() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setfilteredPlants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    ApiService.getPlants()
      .then(data => {
        setPlants(data);
        setfilteredPlants(data)
      });
  }, []);

  const filterPlants = (plantFilter) => {
    let foundPlants = filteredPlants.filter((plant) => {
      let plantLight = plant.light.toLowerCase();
      return plantLight.indexOf(
        plantFilter.toLowerCase()) !== -1
    })
    setfilteredPlants(foundPlants)
  }

  const searchList = (word) => {
    fetch(`https://localhost:3001/plants/search?q=${word}`)
      .then(response => response.json())
      .then(data => {
        if (data) setSearchResults([data]);
        console.log(searchResults);
      });
  };

  const emptySearch = () => {
    setSearchResults([]);
  };

  const plantList = <PlantList
    plants={plants}
    label={'Plants'}
    filterPlants={filterPlants}
  />;

  const resultList = <PlantList
    plants={searchResults}
    label={'Search'}
  />;

  return (
    <div className="search_dashboard">
      <SearchBar searchList={searchList} emptySearch={emptySearch} />
      <div className="dashboard_filter">
        <Filter />
      </div>
      <div className="dashboard_plantlist">
        {searchResults.length > 0
          ? [resultList]
          : [plantList]
        }
      </div>
    </div>
  )
}

export default Search;