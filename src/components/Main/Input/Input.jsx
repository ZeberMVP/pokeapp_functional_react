import React, { useState } from "react";
import Card from "./Card";
import Button from '@mui/material/Button';

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setPokemonName(event.target.pokemon.value);
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
      {pokemonName && <Card pokemonName={pokemonName} />}
    </div>
  );
};

export default Input;

