import React from "react";

const Input = () => {
  return (
    <form>
      <label htmlFor="pokemon">Introduce the name or number of a pokemon</label>
      <input type="text" required></input>
      <button type="submit" value="pokemon"></button>
    </form>
  );
};

export default Input;

