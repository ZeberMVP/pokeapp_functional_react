import React, { useState } from "react";
import CardList from "./CardList";
import Button from '@mui/material/Button';

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [searches, setSearches] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const pokemonName = event.target.pokemon.value;
    setSearches([...searches, { name: pokemonName }]);
    setInputValue("");
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="pokemon">Introduce the name or number of a pokemon </label>
        <input type="text" name="pokemon" value={inputValue} onChange={handleInputChange} required />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
      <CardList searches={searches} />
    </div>
  );
};

export default Input;

