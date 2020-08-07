import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import history from '../../History';
import './AddPlant.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AddPlant({ createMyPlant, shouldWater }) {
  const [nickName, setNickName] = useState('');
  const [bought, setBought] = useState('');
  const [lastWatered, setLastWatered] = useState('');

  let query = useQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickName) return alert('The name is missing!');
    if (!bought) return alert('The date is missing!');
    if (!lastWatered) return alert('The date is missing!');
    let commonName = query.get('name');
    let id = query.get('id');
    createMyPlant(nickName, bought, lastWatered, commonName, id);
    setNickName('');
    setBought('');
    setLastWatered('');
    history.push('/myplants');
  };

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  const handleBought = (e) => {
    setBought(e.target.value);
  };

  const handleLastWatered = (e) => {
    setLastWatered(e.target.value);
  };

  return (
    <form className="add_plant_form" onSubmit={handleSubmit}>
      <h2>Last 3 questions ...</h2>
      {!shouldWater ? (
        <hr className="hr_green" />
      ) : (
        <hr className="hr_yellow" />
      )}
      <h3 className="form_subtitle">What's their name?</h3>
      <p className="subtitle_desc">Every plant needs a name to feel loved!</p>
      <input
        type="text"
        className="form_input"
        name={nickName}
        value={nickName}
        onChange={handleNickName}
        placeholder="type name here"
      />
      <h3 className="form_subtitle">When did you adopt them?</h3>
      <input
        type="date"
        className="form_input"
        name={bought}
        value={bought}
        onChange={handleBought}
      />
      <h3 className="form_subtitle">When did you last water them?</h3>
      <input
        type="date"
        className="form_input"
        name={lastWatered}
        value={lastWatered}
        onChange={handleLastWatered}
      />
      <br />
      <button
        className={!shouldWater ? 'form_btn_green' : 'form_btn_yellow'}
        type="submit"
      >
        Add my new plant
      </button>
    </form>
  );
}

export default AddPlant;
