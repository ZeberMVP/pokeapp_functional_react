import React, { useState } from 'react';

const New = ({ onAdd }) => {
  
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    image: '',
    typeOne: '',
    typeTwo: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(formData);
    setFormData({
      id: '',
      name: '',
      image: '',
      typeOne: '',
      typeTwo: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          minLength={3}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Type One:
        <select name="typeOne" value={formData.typeOne} onChange={handleInputChange} required>
          <option value="">-- select an option --</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
        </select>
      </label>
      <label>
        Type Two:
        <select name="typeTwo" value={formData.typeTwo} onChange={handleInputChange}>
          <option value="">-- select an option --</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
        </select>
      </label>
      <button type="submit">Add Pokemon</button>
    </form>
  );
};

export default New;


