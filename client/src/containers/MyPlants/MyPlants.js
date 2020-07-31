import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import AddPlant from '../../components/AddPlant/AddPlant';
import './MyPlants.css';

function MyPlants({ myPlants, createMyPlant }) {

  return (
    <div className="myplants">
      <MyPlantList myPlants={myPlants} />
    </div>
  )

}

export default MyPlants;