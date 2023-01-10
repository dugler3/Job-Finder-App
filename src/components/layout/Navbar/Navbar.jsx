import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img src={logo} className={classes.image} />
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/offers">Offers</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks">Bookmarks</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
