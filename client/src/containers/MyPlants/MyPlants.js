import React, { useEffect } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import AddPlant from '../../components/AddPlant/AddPlant';
import './MyPlants.css';

function MyPlants({ myPlants, getMyPlants }) {
  useEffect(() => {
    console.log('use effect');
    getMyPlants();
  }, [])

  return (
    <div className="myplants">
      <MyPlantList myPlants={myPlants} />
    </div>
  )

}

export default MyPlants;