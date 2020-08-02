import React from 'react';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'

function PlantList({ plants, label, emptyFilter }) {

  const handleClearClick = () => {
    emptyFilter();
  }

  return (
    <div className="list" label={label}>
      <h2 className="plantlist_title">Our finds:</h2>
      {plants.map(plant =>
        <PlantItem key={plant._id} plant={plant} />
      )}
      {plants.length > 0
        ?
        <button className="clear_button_yellow" type="button" onClick={handleClearClick}>
          <span className="clear_button_text">Clear</span>
        </button>
        : <div></div>
      }
    </div>
  )

}

export default PlantList;