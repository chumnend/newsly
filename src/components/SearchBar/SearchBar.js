import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  const { makeSearch } = props;
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue === inputRef.current.value && inputValue.length > 0) {
        makeSearch(inputValue);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, inputRef, makeSearch]);

  const validInput = () => {
    return inputValue.trim().length > 0;
  };

  const handleSearch = () => {
    makeSearch(inputValue);
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
  makeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
