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

  const filterPlants = (type, light, water, humidity, airPurifying) => {
      ApiService.getFilterPlants({ type, light, water, humidity, 'air_purifying': airPurifying })
      .then(data => {
        if (data) setPlants(data);
        console.log(data);
      });

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
            <MyPlants />
          </Route>
          <Route path="/addplant">
            <AddPlant />
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
