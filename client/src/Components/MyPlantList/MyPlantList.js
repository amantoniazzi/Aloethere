import React from 'react';
import MyPlantItem from '../MyPlantItem/MyPlantItem';

function MyPlantList({ myPlants, updateMyPlant, getMyPlants, updatePlantStatus }) {
  return (
    <div className="list">
      {myPlants.map(myPlant =>
        <MyPlantItem
          key={myPlant._id}
          myPlant={myPlant}
          updateMyPlant={updateMyPlant}
          getMyPlants={getMyPlants}
          updatePlantStatus={updatePlantStatus}
        />
      )}
    </div>
  )
}

export default MyPlantList;