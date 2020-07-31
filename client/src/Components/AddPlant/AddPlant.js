import React, { useState } from 'react';
import ApiService from '../../services/ApiService';
import './AddPlant.css';

function AddPlant({ myPlants, createMyPlant }) {

  const [nickname, setNickname] = useState('');
  const [bought, setBought] = useState('');
  const [lastWatered, setLastWatered] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname) return alert('The name is missing!')
    if (!bought) return alert('The date is missing!')
    if (!lastWatered) return alert('The date is missing!')
    createMyPlant(nickname, bought, lastWatered);
    setNickname('');
    setBought('');
    setLastWatered('');
  }

  const handleNickname = (e) => {
    setNickname(e.target.value);
  }

  const handleBought = (e) => {
    setBought(e.target.value);
  }

  const handleLastWatered = (e) => {
    setLastWatered(e.target.value);
  }

  return (
    <form className="plant_form" onSubmit={handleSubmit}>
      <h2>3 last questions 🌿</h2>
      <h3 className="form_subtitle">What's their name?</h3>
      <p className="subtitle_desc">Every plant needs a name to feel loved!</p>
      <input type="text" name={nickname} value={nickname} onChange={handleNickname} placeholder="type name here" />
      <h3 className="form_subtitle">When did you adopt them?</h3>
      <input type="datetime-local" name={bought} value={bought} onChange={handleBought} />
      <h3 className="form_subtitle">When did you last water it?</h3>
      <input type="datetime-local" name={lastWatered} value={lastWatered} onChange={handleLastWatered} /><br />
      <button className="form_btn" type="submit">Add my new plant</button>
    </form>

  )

}

export default AddPlant;