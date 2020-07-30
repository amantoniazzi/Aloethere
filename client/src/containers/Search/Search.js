import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import PlantList from '../../components/PlantList/PlantList';
import Filter from '../../components/Filter/Filter';
import './Search.css';

function Search() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setfilteredPlants] = useState([]);
  console.log(filteredPlants);

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

  return (
    <div className="search_dashboard">
      <div className="dashboard_filter">
        <Filter />
      </div>
      <div className="dashboard_plantlist">
        <PlantList plants={filteredPlants} filterPlants={filterPlants} />
      </div>
    </div>
  )
}

export default Search;