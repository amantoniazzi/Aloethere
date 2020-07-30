import React from 'react';
import greenImg from '../../assets/undraw_Imagination_re_i0xi.png';
import './Home.css';

function Home() {

  return (
    <div className="home">
      <h1>Aloe there! 👋</h1>
      <img src={greenImg} alt="intro img" style={{ width: '100%' }} />
      <h1>"Like people, plants respond to extra attention."</h1>
    </div>
  )
}

export default Home;