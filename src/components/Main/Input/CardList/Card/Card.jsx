import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Card = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (pokemon.hasOwnProperty('image')) {
        setPokemonData(pokemon)
      } else {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          setPokemonData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();

  }, [pokemon]);


  return (
    <div>
      {pokemonData.sprites ? 
        <Link to={`/pokemon/${pokemonData.id}?name=${pokemonData.name}&image=${pokemonData.sprites.other.dream_world['front_default']}&typeOne=${pokemonData.types[0].type.name}&typeTwo=${pokemonData.types[1].type.name}`}>
          <img src={pokemonData.sprites.other.dream_world['front_default']} alt="Front sprite" />
        </Link>
        : <Link to={`/pokemon/${pokemonData.id}?name=${pokemonData.name}&image=${pokemonData.image}&typeOne=${pokemonData.typeOne}&typeTwo=${pokemonData.typeTwo}`}>
          <img src={pokemonData.image} alt="Front sprite" />
        </Link>}
    </div>
  );
};

export default Card;
