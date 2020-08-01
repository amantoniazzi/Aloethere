import React from 'react';
import MyPlantItem from '../MyPlantItem/MyPlantItem';

function MyPlantList({ myPlants, updateMyPlant, getMyPlants }) {
  return (
    <div className="list">
      {myPlants.map(myPlant =>
        <MyPlantItem key={myPlant._id} myPlant={myPlant} updateMyPlant={updateMyPlant} getMyPlants={getMyPlants} />
      )}
    </div>
  )
}

export default MyPlantList;