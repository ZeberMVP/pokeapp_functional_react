import React, { useState, useEffect } from "react";

const Input = ({ onSearch }) => { 
  const [inputValue, setInputValue] = useState("");
  const [searches, setSearches] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (inputValue && isSearching) {
      const debounceTimer = setTimeout(() => {
        onSearch(inputValue);
        setIsSearching(false);
      }, 3000);
      return () => {
        clearTimeout(debounceTimer);
      };
    }
  }, [inputValue, isSearching, onSearch]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    if (value) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue && !searches.find(search => search.name === inputValue)) {
      onSearch(inputValue);
      setSearches([...searches, { name: inputValue }]);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="pokemon">Introduce the name or number of a pokemon </label>
      <input type="text" name="pokemon" value={inputValue} onChange={handleInputChange} required />
    </form>
  );
};

export default Input;
