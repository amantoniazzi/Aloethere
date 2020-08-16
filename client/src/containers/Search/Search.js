import React from './node_modules/react';
import PlantList from '../../Components/PlantList/PlantList';
import Filter from '../../Components/Filter/Filter';
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