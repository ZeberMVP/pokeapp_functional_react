import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [pokemonName]);

  return (
    <div>
      <p>Name: {pokemonData.name}</p>
      <p>Number: {pokemonData.id}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      {pokemonData.sprites && <img src={pokemonData.sprites.front_default} alt="Front sprite" />}
    </div>
  );
};

export default Card;
