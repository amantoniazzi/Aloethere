import React, { useEffect, useState } from 'react';
import PlantList from '../../components/PlantList/PlantList';
import Filter from '../../components/Filter/Filter';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Search.css';

function Search({ plants, filterPlants }) {

  return (
    <div className="search_dashboard">

      <div className="dashboard_filter">
        {plants.length > 0
          ? <p></p>
          : <Filter plants={plants} filterPlants={filterPlants} />
        }
      </div>
      <div className="dashboard_plantlist">
        <PlantList
          plants={plants}
          label={'Plants'}
        />
      </div>
    </div>
  )
}

export default Search;