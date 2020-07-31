import React from 'react';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'

function PlantList({ plants, label }) {

  return (
    <div className="list" label={label}>
      {plants.map(plant =>
        <PlantItem key={plant._id} plant={plant} />
      )}
    </div>
  )

}

export default PlantList;