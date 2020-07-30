import React from 'react';
import { Link } from "react-router-dom";
import { IoIosPartlySunny, IoMdSunny, IoIosWater, IoMdSnow } from "react-icons/io";
import './PlantItem.css'

function PlantItem(props) {

  return (
    <div className="plantcard">
      <div className="plantcard_img">
        <img src={require('../../assets/' + props.plant._id + '.jpg')} alt={props.plant.common_name} />
      </div>
      <div className="plantcard-info">
        <h2 className="plantcard-title">{props.plant.common_name}</h2>
        <h4 className="plantcard-type">{props.plant.type}</h4>
      </div>
      <div className="plantcard-icons">
        <div className="info-light">
          {props.plant.light === 'any' ? <IoIosPartlySunny />
            : props.plant.light === 'medium' ? <IoMdSunny />
              : <div><IoMdSunny /><IoMdSunny /></div>
          }
        </div>
        <div className="info-water">
          {props.plant.water === 'two weeks' ? <IoIosWater />
            : props.plant.water === 'weekly' ? <div><IoIosWater /><IoIosWater /></div>
              : <div><IoIosWater /><IoIosWater /><IoIosWater /></div>
          }
        </div>
        <div className="info-air">
          {!props.plant.air_purifying ? null
            : IoMdSnow
          }
        </div>
      </div>
      <Link to='/addplant'>Add Me</Link>
    </div>
  )

}

export default PlantItem;