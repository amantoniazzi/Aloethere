import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../../history';
import { GiDandelionFlower } from "react-icons/gi";
import greenImg from '../../assets/greenHomepagenarrow.png';
import yellowImg from '../../assets/yellowHomepagenarrow.png';

import './Home.css';

function Home({ shouldWater }) {

  return (
    <div className="Home">

      <div className={(!shouldWater) ? "home_green" : "home_yellow"}>
        <h1 className={(!shouldWater) ? "home_title_green" : "home_title_yellow"}>
          <span className="title_text">Aloe there! </span>
          <GiDandelionFlower size={32} />
        </h1>
        {(!shouldWater)
          ? <h3 className="home_subtitle">All your plants are watered and happy!</h3>
          : <h3 className="home_subtitle">Your plants need love (and water)!</h3>
        }
        <button className={(!shouldWater) ? "button_green" : "button_yellow"} type="button" onClick={() => history.push('/myplants')}>
          Check on them
            </button>
        <button className={(!shouldWater) ? "button_green" : "button_yellow"} type="button" onClick={() => history.push('/plants')}>
          Find your next plant
            </button>
        <img src={(!shouldWater) ? greenImg : yellowImg} alt="intro img" className="home_img" />
        <h2 className={(!shouldWater) ? "home_quote_green" : "home_quote_yellow"}>
          <span className={(!shouldWater) ? "quote_green" : "quote_yellow"}>&ldquo;</span>
          Like people, plants respond to extra attention.
          <span className={(!shouldWater) ? "quote_green" : "quote_yellow"}>&rdquo;</span></h2>
      </div>


    </div>
  )
}

export default Home;