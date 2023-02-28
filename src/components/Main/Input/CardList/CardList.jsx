import React from 'react';
import Card from './Card';

const CardList = ({ searches }) => {
  return (
    <div>
      <h3>This are all the pokemon you have searched and created. Is this page empty? Then start adding pokemon to this page!</h3>
      <div>
        {searches.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>

  );
};

export default CardList;


