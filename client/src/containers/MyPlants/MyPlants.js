import React, { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import ApiService from '../../services/ApiService';
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import AddPlant from '../../components/AddPlant/AddPlant';
import './MyPlants.css';

function MyPlants() {

  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    ApiService.getMyPlants()
      .then(data => {
        setMyPlants(data);
      });
  }, []);

  const createMyPlant = (nickname, bought, lastWatered) => {
    let data = { nickname, bought, lastWatered }
    ApiService.postMyPlant(data)
      .then(newplant => setMyPlants(myplants => [...myplants, newplant]))
  }

  return (
    <div className="myplants">
      <div style={{ display: 'none' }}>
        <AddPlant myPlants={myPlants} createMyPlant={createMyPlant} />
      </div>
      <MyPlantList myPlants={myPlants} />
    </div>
  )

}

export default MyPlants;