import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoIosHome, IoIosLeaf, IoIosSearch } from "react-icons/io";
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import MyPlants from './containers/MyPlants/MyPlants';
import AddPlant from './components/AddPlant/AddPlant';
import './App.css';

function App() {

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
            <Search />
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
