import React from 'react';
import moment from 'moment';
import './MyPlantItem.css'

function MyPlantItem({ myPlant, updateMyPlant, getMyPlants }) {

  const getInterval = (myPlant) => {
    return myPlant.plantInfo.water.split(" ")[0];
  }
  const interval = getInterval(myPlant);

  const getNextWatering = (lastWatered, interval) => {
    const new_date = moment(lastWatered).add(interval, 'days');
    return new_date.format("dddd, MMM Do");
  }

  const nextWatering = getNextWatering(myPlant.lastWatered, interval);

  const getDifference = (given) => {
    const current = moment();
    const momentGiven = moment(given);
    console.log(momentGiven)
    return current.diff(momentGiven);
  }

  console.log(getDifference(nextWatering));

  const handleClick = () => {
    const id = myPlant._id;
    const currentDate = moment();
    console.log(currentDate)
    updateMyPlant(id, currentDate);
    getMyPlants();
  }

  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + myPlant.plantInfo._id + '.jpg')} alt={myPlant.commonName} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{myPlant.nickName}</h2>
        <h4 className="plantcard-type">{myPlant.plantInfo.commonName}</h4>
        {/* <h4 className="plantcard-water">Last watered: {moment(myPlant.lastWatered).format("dddd, MMM Do")}</h4> */}
        <h4 className="plantcard-water">Next watering: {nextWatering}</h4>
        <button type="button" onClick={handleClick}>I've just watered it!</button>
      </div>

    </div>
  )

}

export default MyPlantItem;