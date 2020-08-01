import React from 'react';
import moment from 'moment';
import './MyPlantItem.css'

function MyPlantItem({ myPlant, updateMyPlant, getMyPlants, updatePlantStatus }) {

  const getInterval = (myPlant) => {
    return myPlant.plantInfo.water.split(" ")[0];
  }
  const interval = getInterval(myPlant);

  const getNextWatering = (lastWatered, interval) => {
    const new_date = moment(lastWatered).add(interval, 'days');
    return new_date.format('dddd, MMM Do');
  }

  const nextWatering = getNextWatering(myPlant.lastWatered, interval);

  const getDifference = (nextWatering) => {
    const current = moment();
    const newWatered = moment(nextWatering, 'dddd, MMM Do').format('YYYY-MM-DD[T]HH:mm:ss');
    const momentWatered = moment(newWatered);
    return momentWatered.diff(current, 'days') + 1;
  }

  const displayDifference = (nextWatering) => {
    if (getDifference(nextWatering) >= 0) {
      if (getDifference(nextWatering) === 0) return 'Water me today!';
      return `Water me in ${getDifference(nextWatering)} days`;
    } else if (getDifference(nextWatering) < 0) {
      if (getDifference(nextWatering) === -1) return `Water me! You are ${getDifference(nextWatering)} day late`;
      return `Water me! You are ${getDifference(nextWatering)} days late`;
    }
  }

  const handleClick = () => {
    const id = myPlant._id;
    const currentDate = moment();
    updateMyPlant(id, currentDate);
  }

  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + myPlant.plantInfo._id + '.jpg')} alt={myPlant.commonName} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{myPlant.nickName}</h2>
        <h4 className="plantcard-type">{myPlant.plantInfo.commonName}</h4>
        <h4 className="plantcard-water">{displayDifference(nextWatering)}</h4>
        <button type="button" onClick={handleClick}>I've just watered it!</button>
      </div>

    </div>
  )

}

export default MyPlantItem;