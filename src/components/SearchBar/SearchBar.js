import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
  const [inputValue, setInputValue] = useState('');

  const validInput = () => {
    return inputValue.trim().length > 0;
  };

  const handleSearch = () => {
    props.makeSearch(inputValue);
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Enter term to search for..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!validInput()}>
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  makeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
