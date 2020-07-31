import React, { useState } from 'react';
import { IoIosPartlySunny, IoMdSunny, IoIosWater, IoIosThermometer, IoMdSnow } from "react-icons/io";
import './Filter.css';

function Filter({ plants, filterPlants }) {

  const [type, setType] = useState('');
  const [light, setLight] = useState('');
  const [water, setWater] = useState('');
  const [humidity, setHumidity] = useState('');
  const [airPurifying, setAirPurifying] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type) return alert('The name is missing!')
    if (!light) return alert('The type is missing!')
    if (!water) return alert('The date is missing!')
    if (!humidity) return alert('The date is missing!')
    if (!airPurifying) return alert('The date is missing!')
    filterPlants(type, light, water, humidity, airPurifying);
    setType('');
    setLight('');
    setWater('');
    setHumidity('');
    setAirPurifying('');
  }

  const handleType = (e) => {
    setType(e.target.value);
    console.log(e.target.value)
  }

  const handleLight = (e) => {
    console.log(e.target.value)
    setLight(e.target.value);
  }

  const handleWater = (e) => {
    setWater(e.target.value);
  }

  const handleHumidity = (e) => {
    setHumidity(e.target.value);
  }

  const handleAirPurifying = (e) => {
    setAirPurifying(e.target.value);
  }

  return (
    <form className="plant_form" onSubmit={handleSubmit}>
      <h2>Find the perfect plant to add to your plant fam 🌿</h2>

      <h3 className="form_subtitle">How much light do you have?</h3>
      <div onChange={handleLight}>
        <label>
          <input type="radio" name="light" value="light" />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="light" value="Medium" />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="light" value="any" />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
      </div>
      <h3 className="form_subtitle">How much water?</h3>
      <div onChange={handleWater}>
        <label>
          <input type="radio" name="water" id="water1" value="weekly" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" id="water2" name="water" value="Medium" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" id="water3" name="water" value="high" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
      </div>
      <h3 className="form_subtitle">How much humidity?</h3>
      <div onChange={handleHumidity}>
        <label>
          <input type="radio" id="humidity1" name="humidity" value="high" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" id="humidity2" name="humidity" value="humidity2" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" id="humidity3" name="humidity" value="humidity3" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
      </div>
      <h3 className="form_subtitle">What type of plant you prefer?</h3>
      <input type="radio" className="keep" id='fern' value='fern' name="type" onChange={handleType} />

      <label for="light1">Fern</label><br />

      <input type="radio" className="keep" id="tree" name="type" value="tree" onChange={handleType} />
      <label for="light2">Tree</label><br />

      <input type="radio" className="keep" id="hanging" name="type" value="Evergreen vine" onChange={handleType} />
      <label for="light3">hanging</label><br />
      <h3 className="form_subtitle">Are you looking for an airpurifying plant?</h3>
      <div onChange={handleAirPurifying} >
        <label>
          <input type="radio" id="air" name="air" value="true" />
          <div className="icon">
            <IoMdSnow size={25} />
          </div>
        </label>
      </div>
      <button className="form_btn" type="submit">Find my perfect plant match!</button>
    </form>

  )

}

export default Filter;