import React, { useState } from 'react';
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
      <h3 className="form_subtitle">What type of plant you prefer?</h3>
      <input type="radio" id='fern' value='fern' name="type" onChange={handleType} />
      <label for="light1">Fern</label>

      <input type="radio" id="tree" name="type" value="tree" onChange={handleType} />
      <label for="light2">Tree</label>

      <input type="radio" id="hanging" name="type" value="Evergreen vine" onChange={handleType} />
      <label for="light3">hanging</label><br />

      <h3 className="form_subtitle">How much light do you have?</h3>
      <input type="radio" name="light" value="light" onChange={handleLight} />
      <label for="light1"> I need losts of light</label>
      <input type="radio" name="light" value="Medium" onChange={handleLight} />
      <label for="light2"> I need medium light</label>
      <input type="radio" name="light" value="any" onChange={handleLight} />
      <label for="light3"> I like the shade</label><br />
      <h3 className="form_subtitle">How much water?</h3>
      <input type="radio" name="water" id="water1" value="weekly" onChange={handleWater} />
      <label for="water1"> I need losts of water</label>
      <input type="radio" id="water2" name="water" value="Medium" onChange={handleWater} />
      <label for="water2"> I need medium light</label>
      <input type="radio" id="water3" name="water" value="Shade" onChange={handleWater} />
      <label for="water3"> I like the shade</label><br />
      <h3 className="form_subtitle">How much humidity?</h3>
      <input type="radio" id="humidity1" name="humidity" value="high" onChange={handleHumidity} />
      <label for="humidity1"> I need losts of water</label>
      <input type="radio" id="humidity2" name="humidity" value="humidity2" onChange={handleHumidity} />
      <label for="humidity2"> I need medium light</label>
      <input type="radio" id="humidity3" name="humidity" value="Shade" onChange={handleHumidity} />
      <label for="humidity3"> I like the shade</label><br />
      <h3 className="form_subtitle">Are you looking for an airpurifying plant?</h3>
      <input type="checkbox" id="air" name="air" value="true" onChange={handleAirPurifying} />
      <label for="air">Yes</label>
      <button className="form_btn" type="submit">Find my perfect plant match!</button>
    </form>

  )

}

export default Filter;