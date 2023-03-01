import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={"nav-bar"}>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/new" >Create</Link>
    </nav>
  )
};

export default Nav;
