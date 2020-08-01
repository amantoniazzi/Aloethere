import React from 'react';
import { withRouter } from 'react-router-dom';
import history from '../../history';
import { IoIosLeaf } from "react-icons/io";
import { GiDandelionFlower } from "react-icons/gi";
import greenImg from '../../assets/greenHomepagenarrow.png';
import yellowImg from '../../assets/yellowHomepagenarrow.png';


import './Home.css';

function Home({ shouldWater }) {

  return (
    <div className="Home">
      {
        (!shouldWater) ?
          <div className="home_green">
            <h1 className="home_title_green"><span className="title_text">Aloe there!</span> <GiDandelionFlower size={32} /></h1>
            <h3 className="home_subtitle">All your plants are watered and happy!</h3>
            <button className="button_green" type="button" onClick={() => history.push('/myplants')}>
              Check on them
            </button>
            <img src={greenImg} alt="intro img" className="home_img" />
            <h2 className="home_quote_green"><span className="quote_green">&ldquo;</span>Like people, plants respond to extra attention.<span className="quote_green">&rdquo;</span></h2>
          </div>
          : <div className="home_yellow">
            <h1 className="home_title_yellow"><span className="title_text">Aloe there!</span> <GiDandelionFlower size={32} /></h1>
            <h3 className="home_subtitle"> Your plants need some love (and water!)</h3>
            <button className="button_yellow" type="button" onClick={() => history.push('/myplants')}>Check on them</button>
            <img src={yellowImg} alt="intro img" style={{ width: '100%' }} />
            <h2 className="home_quote_yellow"><span className="quote_yellow">&ldquo;</span>Like people, plants respond to extra attention.<span className="quote_yellow">&rdquo;</span></h2>
          </div>

      }

    </div>
  )
}

export default Home;