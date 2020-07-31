import React from 'react';
import './MyPlantItem.css'

function MyPlantItem({ myPlant }) {
  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + myPlant.plantInfo._id + '.jpg')} alt={myPlant.commonName} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{myPlant.nickName}</h2>
        <h4 className="plantcard-type">{myPlant.plantInfo.commonName}</h4>
        <h4 className="plantcard-water">{myPlant.lastWatered}</h4>
      </div>

    </div>
  )

}

export default MyPlantItem;