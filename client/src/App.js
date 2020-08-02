import React, { useEffect, useState } from 'react';
import { Router, Switch, Route, Link } from "react-router-dom";
import { IoIosHome, IoIosLeaf, IoIosSearch } from "react-icons/io";
import ApiService from './services/ApiService';
import moment from 'moment';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import MyPlants from './containers/MyPlants/MyPlants';
import AddPlant from './components/AddPlant/AddPlant';
import history from './history';
import './App.css';

function App() {

  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [shouldWater, setShouldWater] = useState(false);

  useEffect(() => {
    const shouldIWater = myPlants.some(myPlant => {
      const interval = myPlant.plantInfo.water.split(" ")[0];
      const new_date = moment(myPlant.lastWatered).add(interval, 'days');
      const current = moment();
      const diff = new_date.diff(current, 'days') + 1;
      if (diff < 0) return true;
    })
    setShouldWater(shouldIWater);
  }, [myPlants])

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

  const emptyFilter = () => {
    setPlants([]);
  };

  return (
    <Router history={history}>
      <div className="App">
        <nav className="App_nav">
          <ul className="App_navbar">
            <li className="navbar_li">
              <Link to="/">
                {(!shouldWater) ?
                  <div className="navbar_icon_green"><IoIosHome size={32} /></div>
                  : <div className="navbar_icon_yellow"><IoIosHome size={32} /></div>
                }
              </Link>
            </li>
            <li className="navbar_li">
              <Link to="/plants">
                {(!shouldWater) ? <div className="navbar_icon_green"><IoIosSearch size={32} /></div>
                  : <div className="navbar_icon_yellow"><IoIosSearch size={32} /></div>
                }
              </Link>
            </li>
            <li className="navbar_li">
              <Link to="/myplants">
                {(!shouldWater) ? <div className="navbar_icon_green"><IoIosLeaf size={32} /></div>
                  : <div className="navbar_icon_yellow"><IoIosLeaf size={32} /></div>
                }
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/plants">
            <Search
              shouldWater={shouldWater}
              plants={plants}
              filterPlants={filterPlants}
              emptyFilter={emptyFilter}
            />
          </Route>
          <Route path="/myplants">
            <MyPlants
              myPlants={myPlants}
              shouldWater={shouldWater}
              getMyPlants={getMyPlants}
              updateMyPlant={updateMyPlant}
            />
          </Route>
          <Route path="/addplant">
            <AddPlant createMyPlant={createMyPlant} />
          </Route>
          <Route path="/">
            <Home shouldWater={shouldWater} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
