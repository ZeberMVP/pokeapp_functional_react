import React from "react";
import Card from "./Card";

const CardList = ({ searches }) => {
  return (
    <div>
      {searches.map((search, index) => (
        <Card key={index} pokemonName={search.name} />
      ))}
    </div>
  );
};

export default CardList;
