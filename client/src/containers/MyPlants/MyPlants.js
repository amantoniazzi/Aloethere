import React, { useEffect } from 'react';
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import './MyPlants.css';

function MyPlants({ myPlants, getMyPlants, updateMyPlant, updatePlantStatus }) {
  useEffect(() => {
    getMyPlants();
  }, [])

  return (
    <div className="myplants">
      <MyPlantList
        myPlants={myPlants}
        updateMyPlant={updateMyPlant}
        getMyPlants={getMyPlants}
        updatePlantStatus={updatePlantStatus}
      />
    </div>
  )
}

export default MyPlants;