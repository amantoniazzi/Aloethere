import React from 'react';
import './MyPlantItem.css'

function MyPlantItem({ myPlant }) {
  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + myPlant.plant_info._id + '.jpg')} alt={myPlant.common_name} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{myPlant.nickname}</h2>
        <h4 className="plantcard-type">{myPlant.plant_info.type}</h4>
        <h4 className="plantcard-water">{myPlant.last_watered}</h4>
      </div>

    </div>
  )

}

export default MyPlantItem;