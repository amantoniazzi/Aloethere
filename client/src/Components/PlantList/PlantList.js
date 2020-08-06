import React from 'react';
import PlantItem from '../plantItem/PlantItem';

import './PlantList.css'

function PlantList({ plants, label, emptyFilter, shouldWater }) {

  const handleClearClick = () => {
    emptyFilter();
  }



  return (
    <div label={label}>
      {plants.length > 0
        ?
        <div className="list">

          <h2 className={(!shouldWater) ? "plantlist_title_green" : "plantlist_title_yellow"}>Our finds for you:
      </h2>

          {plants.map(plant =>
            <PlantItem key={plant._id} plant={plant} />
          )}

          <button className={(!shouldWater) ? "clear_button_green" : "clear_button_yellow"} type="button" onClick={handleClearClick}>
            <span className="clear_button_text">Clear</span>
          </button>
        </div>
        : <div></div>
      }
    </div>
  )

}

export default PlantList;