import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home';
import SearchDashboard from './Components/SearchDashboard/SearchDashboard';
import MyPlantList from './Components/MyPlantList/MyPlantList';
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
            <SearchDashboard />
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
