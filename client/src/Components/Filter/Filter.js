import React, { useState } from 'react';
import { IoIosStar, IoMdSunny, IoIosWater, IoIosThermometer, IoMdSnow } from "react-icons/io";
import { RiCheckboxCircleLine } from "react-icons/ri";
import './Filter.css';

function Filter({ plants, filterPlants, shouldWater }) {

  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [light, setLight] = useState('');
  const [water, setWater] = useState('');
  const [humidity, setHumidity] = useState('');
  const [airPurifying, setAirPurifying] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(0);
  const [selectedLight, setSelectedLight] = useState(0);
  const [selectedWater, setSelectedWater] = useState(0);
  const [selectedHumidity, setSelectedHumidity] = useState(0);


  const difficultyIsChecked = (e) => {
    let radioValue = e.target.value;

    if (radioValue === 'Low') setSelectedDifficulty(1);
    if (radioValue === 'Medium') setSelectedDifficulty(2);
    if (radioValue === 'High') setSelectedDifficulty(3)

  }

  const lightIsChecked = (e) => {
    let radioValue = e.target.value;

    if (radioValue === 'Low') setSelectedLight(1);
    if (radioValue === 'Medium') setSelectedLight(2);
    if (radioValue === 'High') setSelectedLight(3)

  }

  const waterIsChecked = (e) => {
    let radioValue = e.target.value;

    if (radioValue === '30 days') setSelectedWater(1);
    if (radioValue === '14 days') setSelectedWater(2);
    if (radioValue === '7 days') setSelectedWater(3)

  }

  const humidityIsChecked = (e) => {
    let radioValue = e.target.value;

    if (radioValue === 'Low') setSelectedHumidity(1);
    if (radioValue === 'Medium') setSelectedHumidity(2);
    if (radioValue === 'High') setSelectedHumidity(3)

  }


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
      <h2>Find your perfect plant match to add to the fam <span role="img" aria-label="plant">🌿</span></h2>
      {(!shouldWater) ?
        <hr className="hr_green" />
        : <hr className="hr_yellow" />
      }
      <h3 className="form_subtitle">Are you an expert plant parent?</h3>
      <div onChange={handleDifficulty}>
        <label >
          <input
            type="radio"
            name="difficulty"
            id="1"
            className={(selectedDifficulty >= 1) ? "selected" : "unselected"}
            value="Low"
            onChange={difficultyIsChecked} />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="difficulty" id="2" value="Medium" onChange={difficultyIsChecked} className={(selectedDifficulty >= 2) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="difficulty" id="3" value="High" onChange={difficultyIsChecked} className={(selectedDifficulty >= 3) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosStar size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">Will you water it frequently?</h3>
      <div onChange={handleWater}>
        <label>
          <input type="radio" name="water" value="30 days" onChange={waterIsChecked} className={(selectedWater >= 1) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="water" value="14 days" onChange={waterIsChecked} className={(selectedWater >= 2) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="water" value="7 days" onChange={waterIsChecked} className={(selectedWater >= 3) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosWater size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">How much light does your room have?</h3>
      <div onChange={handleLight}>
        <label>
          <input type="radio" name="light" value="Low" onChange={lightIsChecked} className={(selectedLight >= 1) ? "selected" : "unselected"} />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="light" value="Medium" onChange={lightIsChecked} className={(selectedLight >= 2) ? "selected" : "unselected"} />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="light" value="High" onChange={lightIsChecked} className={(selectedLight >= 3) ? "selected" : "unselected"} />
          <div className="icon">
            <IoMdSunny size={25} />
          </div>
        </label>
      </div>

      <h3 className="form_subtitle">How much humidity?</h3>
      <div onChange={handleHumidity}>
        <label>
          <input type="radio" name="humidity" value="Low" onChange={humidityIsChecked} className={(selectedHumidity >= 1) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="humidity" value="Medium" onChange={humidityIsChecked} className={(selectedHumidity >= 2) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
        <label>
          <input type="radio" name="humidity" value="High" onChange={humidityIsChecked} className={(selectedHumidity >= 3) ? "selected" : "unselected"} />
          <div className="icon">
            <IoIosThermometer size={25} />
          </div>
        </label>
      </div>
      <h3 className="form_subtitle">What type of plant you prefer?</h3>
      <div onChange={handleType}>

        <label>
          <input type="radio" value='Ferns' name="type" />
          <div className="icon">
            <RiCheckboxCircleLine size={20} />
          </div>
            Ferns
        </label><br />

        <label>
          <input type="radio" name="type" value="Trees" />
          <div className="icon">
            <RiCheckboxCircleLine size={20} />
          </div>
          Trees</label><br />
        <label>
          <input type="radio" id="hanging" name="type" value="Hanging plants" />
          <div className="icon">
            <RiCheckboxCircleLine size={20} />
          </div>
          Hanging plants</label><br />
      </div>
      <h3 className="form_subtitle">Do you want an airpurifying plant?</h3>
      <div onChange={handleAirPurifying} >
        <label>
          <input type="radio" id="air" name="air" value="true" />
          <div className="icon">
            <IoMdSnow size={25} />
          </div>
        </label>
      </div>
      {(!shouldWater) ?
        <button className="form_btn_green" type="submit">Find my perfect plant match!</button>
        : <button className="form_btn_yellow" type="submit">Find my perfect plant match!</button>
      }
    </form>

  )

}

export default Filter;
