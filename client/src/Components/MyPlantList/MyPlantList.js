import React from 'react';
import MyPlantItem from '../MyPlantItem/MyPlantItem';

function MyPlantList({ myPlants, updateMyPlant, getMyPlants, updatePlantStatus, shouldWater, deleteMyPlant }) {
  return (
    <div className="list">
      {myPlants
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(myPlant =>
          <MyPlantItem
            key={myPlant._id}
            myPlant={myPlant}
            updateMyPlant={updateMyPlant}
            getMyPlants={getMyPlants}
            updatePlantStatus={updatePlantStatus}
            shouldWater={shouldWater}
            deleteMyPlant={deleteMyPlant}
          />
        )}
    </div>
  )
}

export default MyPlantList;