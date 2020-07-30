import React, { useState } from 'react';
import './Filter.css';

function Filter(props) {
  const [plantFilter, setplantFilter] = useState("");

  return (
    <div className="filter_form">
      <div className="filter_light">
        <h4>Light</h4>
        <ul className="light_list">
          <li className="light_item">
            <input type="checkbox" id="light1" value="Light" />
            <label for="light1"> I need losts of light</label>
          </li>
          <li className="light_item">
            <input type="checkbox" id="light2" name="light2" value="Medium" />
            <label for="light2"> I need medium light</label>
          </li>
          <li className="light_item">
            <input type="checkbox" id="light3" name="light3" value="Shade" />
            <label for="light3"> I like the shade</label><br />
          </li>
        </ul>
      </div>
      <div className="filter_type">
        <h4>Type</h4>
        <ul className="type_list">
          <li className="type_item">
            <input type="checkbox" id="type1" name="type1" value="Ferns" />
            <label for="type1"> Ferns</label>
          </li>
          <li className="type_item">
            <input type="checkbox" id="type2" name="type2" value="Palms" />
            <label for="type2"> Palms</label>
          </li>
          <li className="type_item">
            <input type="checkbox" id="type3" name="type3" value="Hanging" />
            <label for="type3"> Hanging</label>
          </li>
          <li className="type_item">
            <input type="checkbox" id="type4" name="type4" value="Cacti" />
            <label for="type4"> Cacti</label>
          </li>
          <li className="type_item">
            <input type="checkbox" id="type5" name="type5" value="Trees" />
            <label for="type5"> Trees</label>
          </li>
        </ul>
      </div>
      <div className="filter_difficulty">
        <h4>Difficulty</h4>
        <ul className="difficulty_list">
          <li className="difficulty_item">
            <input type="checkbox" id="easy" name="easy" value="easy" />
            <label for="easy"> I'm easy-going</label>
          </li>
          <li className="difficulty_item">
            <input type="checkbox" id="medium" name="medium" value="medium" />
            <label for="medium"> I need some attention</label>
          </li>
          <li className="difficulty_item">
            <input type="checkbox" id="high" name="high" value="high" />
            <label for="high"> I need lots of attention</label>
          </li>
        </ul>
      </div>
      <div className="filter_air">
        <ul className="air_list">
          <li className="air_item">
            <input type="checkbox" id="air" name="air" value="air" />
            <label for="air"> Airpurifying</label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter;