import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

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
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{id}</h2>
      <p>Name: {name}</p>
      <img src={image} alt="Front sprite"></img>
      <p>Type One: {typeOne}</p>
      <p>{typeTwo ? `Type Two: ${typeTwo}` : null}</p>
    </div>
  );
};

export default Details;


