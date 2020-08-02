import React, { useEffect } from 'react';
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import './MyPlants.css';

function MyPlants({ myPlants, getMyPlants, updateMyPlant, updatePlantStatus, shouldWater, deleteMyPlant }) {
  useEffect(() => {
    getMyPlants();
  }, [])

  return (
    <div className="myplants">
      <h2 className="myplants-title">Welcome back to your plant fam!</h2>
      <p className="myplants-desc">Check the watering schedule</p>
      <MyPlantList
        myPlants={myPlants}
        updateMyPlant={updateMyPlant}
        getMyPlants={getMyPlants}
        updatePlantStatus={updatePlantStatus}
        shouldWater={shouldWater}
        deleteMyPlant={deleteMyPlant}
      />
    </div>
  )
}

export default MyPlants;