import React, { useEffect, useState } from 'react';
import ApiService from '../../Services/ApiService';
import PlantList from '../PlantList/PlantList';
import FilterForm from '../FilterForm/FilterForm';
import './SearchDashboard.css';

function SearchDashboard() {
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
    filterPlants = filteredPlants.filter((plant) => {
      let plantLight = plant.light.toLowerCase();
      return plantLight.indexOf(
        plantFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredPlants
    })
  }

  return (
    <div className="search_dashboard">
      <div className="dashboard_filter">
        <FilterForm />
      </div>
      <div className="dashboard_plantlist">
        <PlantList plants={plants} filterPlants={filterPlants} />
      </div>
    </div>
  )
}

export default SearchDashboard;