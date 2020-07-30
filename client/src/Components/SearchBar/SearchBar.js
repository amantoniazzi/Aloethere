import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar ({searchList, emptySearch}) {

  const [value, setValue] = useState(); 

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    if (event.target.value) {
      searchList(event.target.value);
    } else {
      emptySearch();
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="search-bar" id="searchform" onSubmit={handleSubmit}>
      {/* <img src={icon} className="icon" alt="search icon"/> */}
      <input 
        type="text"
        className="input"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </form>
  );

}

export default SearchBar;