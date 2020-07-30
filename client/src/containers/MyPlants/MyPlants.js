import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';
import MyPlantList from '../../components/MyPlantList/MyPlantList';
import './MyPlants.css';

function MyPlants() {

  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    ApiService.getMyPlants()
      .then(data => {
        setMyPlants(data);
      });
  }, []);

  return (
    <div className="myplants">
      <MyPlantList myPlants={myPlants} />
    </div>
  )

}

export default MyPlants;