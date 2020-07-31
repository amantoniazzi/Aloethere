import React, { useState } from 'react';
import { IoIosStar, IoMdSunny, IoIosWater, IoIosThermometer, IoMdSnow } from "react-icons/io";
import './Filter.css';

function Filter({ plants, filterPlants }) {

  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [light, setLight] = useState('');
  const [water, setWater] = useState('');
  const [humidity, setHumidity] = useState('');
  const [airPurifying, setAirPurifying] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type) return alert('The type is missing!')
    if (!light) return alert('The light is missing!')
    if (!water) return alert('The water is missing!')
    if (!humidity) return alert('The humidity is missing!')
    if (!airPurifying) return alert('The air purifying is missing!')
    filterPlants(difficulty, type, light, water, humidity, airPurifying);
    setDifficulty('');
    setType('');
    setLight('');
    setWater('');
    setHumidity('');
    setAirPurifying('');
  }

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  }

  const handleType = (e) => {
    setType(e.target.value);
  }

  const handleLight = (e) => {
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

      <h3 className="form_subtitle">Are you an expert plant parent?</h3>
      <div onChange={handleDifficulty}>
        <label>
          <input type="radio" name="difficulty" value="Low" />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="difficulty" value="Medium" />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="difficulty" value="High" />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">How frequently are you okay to water it?</h3>
      <div onChange={handleWater}>
        <label>
          <input type="radio" id="water1" value="30 days" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="water" value="14 days" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="water" value="7 days" />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">How much light does your room have?</h3>
      <div onChange={handleLight}>
        <label>
          <input type="radio" name="light" value="Low" />
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
          <input type="radio" name="light" value="High" />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">How much humidity?</h3>
      <div onChange={handleHumidity}>
        <label>
          <input type="radio" name="humidity" value="Low" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="humidity" value="Medium" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="humidity" value="High" />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
      </div>
      <h3 className="form_subtitle">What type of plant you prefer?</h3>
      <input type="radio" className="keep" value='Ferns' name="type" onChange={handleType} />

      <label for="light1">Ferns</label><br />

      <input type="radio" className="keep" name="type" value="Trees" onChange={handleType} />
      <label for="light2">Trees</label><br />

      <input type="radio" className="keep" id="hanging" name="type" value="Hanging Plants" onChange={handleType} />
      <label for="light3">Hanging plants</label><br />
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