import React, { useState } from 'react';
import Input from './Input';
import CardList from './Input/CardList';
import New from './New';
import Details from './Input/CardList/Card/Details';
import { Routes, Route, useParams } from "react-router-dom";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searches, setSearches] = useState([]);
  const { id } = useParams();

  const handleAddPokemon = (formData) => {
    const newPokemon = {
      id: formData.id,
      name: formData.name,
      image: formData.image,
      typeOne: formData.typeOne,
      typeTwo: formData.typeTwo,
      userCreated: true
    };
    setPokemons([...pokemons, newPokemon]);
  };


  const handleSearch = (pokemonName) => {
    setSearches([...searches, { name: pokemonName }]);
  }

  return (
    <main className={"main"}>
        <Routes>
          <Route path="/search" element={<Input onSearch={handleSearch} />} />
          <Route path="/" element={<CardList searches={[...searches, ...pokemons]} />} />
          <Route path="/new" element={<New onAdd={handleAddPokemon} />} />
          <Route path="/pokemon/:id" element={<Details id={id} />} />
        </Routes>
    </main>
  );
};

export default Main;


