import React from 'react';
import PlantList from '../../components/PlantList/PlantList';
import Filter from '../../components/Filter/Filter';
import './Search.css';

function Search({ plants, filterPlants, shouldWater, emptyFilter }) {

  return (
    <div className="search_dashboard">

      {plants.length > 0
        ? <p></p>
        : <div className="dashboard_filter">
          <Filter plants={plants} filterPlants={filterPlants} shouldWater={shouldWater} />
        </div>
      }

      <div className="dashboard_plantlist">
        <PlantList
          plants={plants}
          label={'Plants'}
          emptyFilter={emptyFilter}
          shouldWater={shouldWater}
        />
      </div>
    </div>
  )
}

export default Search;