import React from 'react';
import img5f18a933ba73aab062a511ba from '../../Assets/5f18a933ba73aab062a511ba.jpg'
import './PlantItem.css'

function PlantItem (props) {

  return (
    <div className="plantcard">  
      <div className="plantcard_img">
        <img src={require('../../Assets/' + props.plant._id + '.jpg')} alt={props.plant.common_name} />
      </div> 
      <div className="plantcard-info">
        <h2 className="plantcard-title">{props.plant.common_name}</h2>
        <h4 className="plantcard-type">{props.plant.type}</h4>
      </div>
      <div className="plantcard-icons">
        <div className="info-light">
          {props.plant.light==='any' ?  '*'
          : props.plant.light==='medium'? '**'
          : '***'
          }
        </div>
        <div className="info-water">
          {props.plant.water==='two weeks' ?  '^'
          : props.plant.water==='weekly'? '^^'
          : '^^^'
          }
        </div>
        <div className="info-air">
          {!props.plant.air_purifying ?  '-'
          : '+'
          }
        </div>
      </div>
      
    </div>
  )

}

export default PlantItem;