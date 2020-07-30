import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import MyPlantList from './components/MyPlantList/MyPlantList';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="App_navbar">
            <li className="navbar_li">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar_li">
              <Link to="/plants">Search</Link>
            </li>
            <li className="navbar_li">
              <Link to="/myplants">My plants</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/plants">
            <Search />
          </Route>
          <Route path="/myplants">
            <MyPlantList />
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
