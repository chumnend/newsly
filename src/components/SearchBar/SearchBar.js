import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const { searchByQuery } = props;
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue === inputRef.current.value && inputValue.length > 0) {
        searchByQuery(inputValue);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, inputRef, searchByQuery]);

  const validInput = () => {
    return inputValue.trim().length > 0;
  };

  const handleSearch = () => {
    searchByQuery(inputValue);
  };

  return (
    <div className={classes.SearchBar}>
      <input
        ref={inputRef}
        type="text"
        id="search"
        className={classes.Input}
        placeholder="Find Stories By Query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={classes.Button}
        onClick={handleSearch}
        disabled={!validInput()}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchByQuery: PropTypes.func.isRequired,
};

export default SearchBar;
