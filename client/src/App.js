import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoIosHome, IoIosLeaf, IoIosSearch } from "react-icons/io";
import ApiService from './services/ApiService';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import MyPlants from './containers/MyPlants/MyPlants';
import AddPlant from './components/AddPlant/AddPlant';
import './App.css';

function App() {

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);

  const getMyPlants = () => {
    ApiService.getMyPlants()
      .then(data => {
        console.log('got data', data);
        setMyPlants(data);
      });
  }

  const createMyPlant = (nickName, bought, lastWatered, commonName, id) => {
    let data = { nickName, bought, lastWatered, commonName, id };
    ApiService.postMyPlant(data)
  }

  const filterPlants = (difficulty, type, light, water, humidity, airPurifying) => {
    ApiService.getFilterPlants(difficulty, type, light, water, humidity, airPurifying)
      .then(data => {
        if (data) setPlants(data);
        console.log(data);
      });
  }

  const updateMyPlant = (id, lastWatered) => {
    let data = { id, lastWatered };
    ApiService.editMyPlant(data);
  }

  // const searchList = (word) => {
  //   fetch(`https://localhost:3001/plants/search?q=${word}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data) setSearchResults([data]);
  //     });
  // };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="App_navbar">
            <li className="navbar_li">
              <Link to="/"><IoIosHome /> Home</Link>
            </li>
            <li className="navbar_li">
              <Link to="/plants"><IoIosSearch /> Search</Link>
            </li>
            <li className="navbar_li">
              <Link to="/myplants"><IoIosLeaf /> My plants</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/plants">
            <Search plants={plants} filterPlants={filterPlants} />
          </Route>
          <Route path="/myplants">
            <MyPlants myPlants={myPlants} getMyPlants={getMyPlants} updateMyPlant={updateMyPlant} />
          </Route>
          <Route path="/addplant">
            <AddPlant createMyPlant={createMyPlant} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
