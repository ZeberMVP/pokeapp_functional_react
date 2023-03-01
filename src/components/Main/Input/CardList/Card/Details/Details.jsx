import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const name = params.get('name');
  const image = params.get('image');
  const typeOne = params.get('typeOne');
  const typeTwo = params.get('typeTwo');

  return (
    <div id='details'>
      <Button size='small' color='secondary' variant="contained" onClick={() => navigate(-1)}>Back</Button>
      <div className='fullCard'>
        <div id='pokemonName'>{id}: {name}</div>
        <img src={image} alt="Front sprite" id='pokemonImage'></img>
        <div className='PokemonInfo'>
          <div>Type: <span id='pokemonType'>{typeOne}{typeTwo ? `, ${typeTwo}` : null}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Details;


