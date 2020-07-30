import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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

  const createMyPlant = (nickname, commonName, bought, lastWatered, plantId) => {
    let data = { nickname, commonName, bought, lastWatered, plantId }
    ApiService.postMyPlant(data)
      .then(newplant => setMyPlants(myplants => [...myplants, newplant]))
  }

  return (
    <div className="myplants">
      <div style={{ display: 'none' }}>
        <AddPlant myPlants={myPlants} createMyPlant={createMyPlant} />
      </div>
      <Link to='/addplant'>Add a new plant!</Link>
      <MyPlantList myPlants={myPlants} />
    </div>
  )

}

export default MyPlants;