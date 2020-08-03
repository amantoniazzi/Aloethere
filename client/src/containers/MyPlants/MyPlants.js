import React from 'react';
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import './MyPlants.css';

function MyPlants({
  myPlants,
  getMyPlants,
  updateMyPlant,
  updatePlantStatus,
  shouldWater,
  deleteMyPlant,
  modalIsOpen,
  openModal,
  closeModal
}) {

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
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  )
}

export default MyPlants;