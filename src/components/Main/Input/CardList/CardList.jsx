import React from 'react';
import Card from './Card';

const CardList = ({ searches }) => {
  return (
    <div>
      <h3>This are all the pokemon you have searched and created. Is this page empty? Then start adding!</h3>
      <div id='cardList'>
        {searches.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>

  );
};

export default CardList;


