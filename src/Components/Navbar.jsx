import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context';

const Navbar = () => {
  const { state, dispatch } = useContext(MyContext);
  const { theme, data } = state;

  const toggleTheme = () => {
    const newTheme = theme === 'light'? 'dark': 'light';
    dispatch({ type: 'CHANGE_THEME', payload: newTheme })
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">DH Odonto</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button onClick={toggleTheme} className="theme-button">
        <img src="/images/moon.png" alt="Change theme" />
      </button>
    </nav>
  );
}

export default Navbar;