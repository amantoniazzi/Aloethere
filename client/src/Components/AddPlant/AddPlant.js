import React, { useState } from 'react';
import ApiService from '../../services/ApiService';
import './AddPlant.css';

function AddPlant({ myPlants, createMyPlant }) {

  const [nickname, setNickname] = useState('');
  const [commonName, setCommonName] = useState('');
  const [bought, setBought] = useState('');
  const [lastWatered, setLastWatered] = useState('');
  const [plantId, setPlantId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname) return alert('The name is missing!')
    if (!commonName) return alert('The type is missing!')
    if (!bought) return alert('The date is missing!')
    if (!lastWatered) return alert('The date is missing!')
    createMyPlant(nickname, commonName, bought, lastWatered);
    setNickname('');
    setCommonName('');
    setBought('');
    setLastWatered('');
  }

  const handleNickname = (e) => {
    setNickname(e.target.value);
  }

  const handleCommonName = (e) => {
    setCommonName(e.target.value);
    console.log(myPlants)
    setPlantId()
  }

  const handleBought = (e) => {
    setBought(e.target.value);
  }

  const handleLastWatered = (e) => {
    setLastWatered(e.target.value);
  }



  return (
    <form className="plant_form" onSubmit={handleSubmit}>
      <h2>Add a new plant to the family 🌿</h2>
      <h3 className="form_subtitle">WHAT'S THEIR NAME?</h3>
      <input type="text" name={nickname} value={nickname} onChange={handleNickname} placeholder="every plant needs a name to feel loved" />
      <h3 className="form_subtitle">WHAT TYPE OF PLANT IS IT?</h3>
      <select name={commonName} value={commonName} onChange={handleCommonName} placeholder="choose one below">
        {/* {myPlants.map(myPlant =>
        <option value={myPlant.common_name}>{myPlant.common_name}</option>
      )} */}
        <option value="Devil's ivy">Devil's ivy</option>
        <option value="Snake plant">Snake plant</option>
        <option value="Fern">Fern</option>
        <option value="Chinese Money Plant">Chinese Money Plant</option>
        <option value="Fiddle-leaf fig">Fiddle-leaf fig</option>
      </select>
      <h3 className="form_subtitle">WHEN DID YOU ADOPT IT?</h3>
      <input type="datetime-local" name={bought} value={bought} onChange={handleBought} />
      <h3 className="form_subtitle">WHEN DID YOU LAST WATER IT?</h3>
      <input type="datetime-local" name={lastWatered} value={lastWatered} onChange={handleLastWatered} />
      <button className="form_btn" type="submit">Add my new plant</button>
    </form>

  )

}

export default AddPlant;