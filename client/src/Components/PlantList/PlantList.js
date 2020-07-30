import React from 'react';
import PlantItem from '../PlantItem/PlantItem';
import './PlantList.css'

function PlantList(props) {

  return (
    <div className="list">
      {props.plants.map(plant =>
        <PlantItem key={plant._id} plant={plant} />
      )}
    </div>
  )

}

export default PlantList;