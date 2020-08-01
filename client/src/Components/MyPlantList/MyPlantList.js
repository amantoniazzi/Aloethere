import React from 'react';
import MyPlantItem from '../MyPlantItem/MyPlantItem';

function MyPlantList({ myPlants, updateMyPlant }) {
  return (
    <div className="list">
      {myPlants.map(myPlant =>
        <MyPlantItem key={myPlant._id} myPlant={myPlant} updateMyPlant={updateMyPlant} />
      )}
    </div>
  )
}

export default MyPlantList;