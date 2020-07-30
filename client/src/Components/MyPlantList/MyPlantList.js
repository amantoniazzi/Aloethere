import React from 'react';
import MyPlantItem from '../MyPlantItem/MyPlantItem';

function MyPlantList({ myPlants }) {
  return (
    <div className="list">
      {myPlants.map(myPlant =>
        <MyPlantItem key={myPlant._id} myPlant={myPlant} />
      )}
    </div>
  )
}

export default MyPlantList;