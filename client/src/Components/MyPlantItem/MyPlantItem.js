import React from 'react';
import moment from 'moment';
import { GiWateringCan } from 'react-icons/gi';
import DeleteModal from '../modal/Modal.js';
import './MyPlantItem.css';

function MyPlantItem({
  myPlant,
  updateMyPlant,
  shouldWater,
  deleteMyPlant,
  modalIsOpen,
  openModal,
  closeModal,
}) {
  const getInterval = (myPlant) => {
    return myPlant.plantInfo.water.split(' ')[0];
  };
  const interval = getInterval(myPlant);

  const getNextWatering = (lastWatered, interval) => {
    const new_date = moment(lastWatered).add(interval, 'days');
    return new_date.format('dddd, MMM Do');
  };

  const nextWatering = getNextWatering(myPlant.lastWatered, interval);

  const getDifference = (nextWatering) => {
    const current = moment();
    const newWatered = moment(nextWatering, 'dddd, MMM Do').format(
      'YYYY-MM-DD[T]HH:mm:ss'
    );
    const momentWatered = moment(newWatered);
    return momentWatered.diff(current, 'days') + 1;
  };

  const displayDifference = (nextWatering) => {
    const difference = getDifference(nextWatering);
    const notNegative = Math.abs(difference);
    if (getDifference(nextWatering) >= 0) {
      if (getDifference(nextWatering) === 0) return 'Water me today!';
      return `Water me in ${getDifference(nextWatering)} days`;
    } else if (getDifference(nextWatering) < 0) {
      if (getDifference(nextWatering) === -1)
        return `You are ${notNegative} day late`;
      return `You are ${notNegative} days late`;
    }
  };

  const handleClick = () => {
    const id = myPlant._id;
    const currentDate = moment();
    updateMyPlant(id, currentDate);
  };

  return (
    <div className="mylist">
      {getDifference(nextWatering) >= 0 ? (
        <div className="myplantcard">
          <button type="button" className="delete_button" onClick={openModal}>
            x
          </button>
          <DeleteModal
            myPlant={myPlant}
            deleteMyPlant={deleteMyPlant}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
          <div className="myplantcard_img">
            <img
              src={require('../../assets/' + myPlant.plantInfo._id + '.jpg')}
              alt={myPlant.commonName}
            />
          </div>
          <div className="myplantcard-info">
            <h2 className="myplantcard-title">{myPlant.nickName}</h2>
            <h4 className="myplantcard-type">{myPlant.plantInfo.commonName}</h4>
            <h4 className="myplantcard-water">
              {displayDifference(nextWatering)}
            </h4>
            <button
              type="button"
              className={
                !shouldWater ? 'button_water_green' : 'button_water_yellow'
              }
              onClick={handleClick}
            >
              <GiWateringCan size={22} style={{ verticalAlign: 'baseline' }} />
              <span className="button_water_text"> Watered!</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="myplantcard">
          <button type="button" className="delete_button" onClick={openModal}>
            x
          </button>
          <div className="myplantcard_img">
            <img
              src={require('../../assets/' + myPlant.plantInfo._id + '.jpg')}
              alt={myPlant.commonName}
            />
          </div>
          <DeleteModal
            myPlant={myPlant}
            deleteMyPlant={deleteMyPlant}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
          <div className="myplantcard-info">
            <h2 className="myplantcard-title">{myPlant.nickName}</h2>
            <h4 className="myplantcard-type">{myPlant.plantInfo.commonName}</h4>
            <h4 className="myplantcard-water delay">
              {displayDifference(nextWatering)}
            </h4>

            <button
              type="button"
              className="button_water_red"
              onClick={handleClick}
            >
              <GiWateringCan size={22} style={{ verticalAlign: 'baseline' }} />
              <span className="button_water_text"> Watered!</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPlantItem;
