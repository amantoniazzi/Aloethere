import React, { useEffect, useState } from 'react';
import { Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoIosHome, IoIosLeaf, IoIosAddCircleOutline } from 'react-icons/io';
import ApiService from './services/ApiService';
import usePushNotifications from './usePushNotifications';
import moment from 'moment';
import Home from './containers/home/Home';
import Spinner from './components/spinner/Spinner';
import Search from './containers/search/Search';
import MyPlants from './containers/myPlants/MyPlants';
import AddPlant from './components/addPlant/AddPlant';
import history from './history';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [shouldWater, setShouldWater] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);

  const shouldIWater = () => {
    return myPlants.some((myPlant) => {
      const interval = myPlant.plantInfo.water.split(' ')[0];
      const new_date = moment(myPlant.lastWatered).add(interval, 'days');
      const current = moment();
      const diff = new_date.diff(current, 'days') + 1;
      setLoading(false);
      return diff < 0 ? true : false;
    });
  };
  usePushNotifications();

  useEffect(() => {
    getMyPlants();
    setShouldWater(shouldIWater());
  }, []);

  useEffect(() => {
    setShouldWater(shouldIWater());
  }, [myPlants]);

  const getMyPlants = () => {
    ApiService.getMyPlants().then((data) => {
      setMyPlants(data);
    });
  };

  const createMyPlant = (nickName, bought, lastWatered, commonName, id) => {
    let data = { nickName, bought, lastWatered, commonName, id };
    ApiService.postMyPlant(data).then((newPlant) => {
      const newPlants = [...myPlants, newPlant];
      setMyPlants(newPlants);
    });
  };

  const filterPlants = (
    difficulty,
    type,
    light,
    water,
    humidity,
    airPurifying
  ) => {
    ApiService.getFilterPlants(
      difficulty,
      type,
      light,
      water,
      humidity,
      airPurifying
    ).then((data) => {
      if (data) setPlants(data);
    });
  };

  const updateMyPlant = (id, lastWatered) => {
    let data = { id, lastWatered };
    ApiService.editMyPlant(data).then(() => {
      const newPlants = myPlants.map((myPlant) => {
        if (myPlant._id === id) {
          return { ...myPlant, lastWatered };
        }
        return myPlant;
      });
      setMyPlants(newPlants);
    });
  };

  const emptyFilter = () => {
    setPlants([]);
  };

  const deleteMyPlant = (id) => {
    ApiService.deleteMyPlant(id).then(() => {
      const newPlants = myPlants.filter((myPlant) => {
        if (myPlant._id !== id) {
          return myPlant;
        }
      });
      setMyPlants(newPlants);
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Router history={history}>
      <div className="App">
        <nav className="App_nav">
          <ul className="App_navbar">
            <li className="navbar_li">
              <NavLink
                exact
                to="/"
                activeStyle={
                  !shouldWater ? { color: '#00BFA6' } : { color: '#F9A826' }
                }
              >
                <IoIosHome size={32} />
              </NavLink>
            </li>
            <li className="navbar_li">
              <NavLink
                exact
                to="/plants"
                activeStyle={
                  !shouldWater ? { color: '#00BFA6' } : { color: '#F9A826' }
                }
              >
                <IoIosAddCircleOutline size={32} />
              </NavLink>
            </li>
            <li className="navbar_li">
              <NavLink
                exact
                to="/myplants"
                activeStyle={
                  !shouldWater ? { color: '#00BFA6' } : { color: '#F9A826' }
                }
              >
                <IoIosLeaf size={32} />
              </NavLink>
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
              deleteMyPlant={deleteMyPlant}
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          </Route>
          <Route path="/addplant">
            <AddPlant createMyPlant={createMyPlant} shouldWater={shouldWater} />
          </Route>
          <Route path="/notifications"></Route>
          <Route path="/">
            {!loading ? <Spinner /> : <Home shouldWater={shouldWater} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
