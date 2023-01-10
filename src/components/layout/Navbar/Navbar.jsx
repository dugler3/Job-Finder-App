import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img src={logo} className={classes.image} />
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/praca">Oferty pracy</NavLink>
          </li>
          <li>
            <NavLink to="/kariera">Moja kariera</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
