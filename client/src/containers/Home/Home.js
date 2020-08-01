import React from 'react';
import greenImg from '../../assets/undraw_Imagination_re_i0xi.png';
import './Home.css';

function Home({ shouldWater }) {

  return (
    <div className="Home">
      {
        (!shouldWater) ?
          <div className="home-green">
            <h1>Aloe there! 👋</h1>
            <h2>All your plants are watered and happy!</h2>
            <img src={greenImg} alt="intro img" style={{ width: '100%' }} />
          </div>
          : <div className="home-yellow">
            <h1>Aloe there! 👋</h1>
            <h2>Your plants need some love (and water!)</h2>
            <img src={greenImg} alt="intro img" style={{ width: '100%' }} />
          </div>

      }
      <h1>"Like people, plants respond to extra attention."</h1>
    </div>
  )
}

export default Home;