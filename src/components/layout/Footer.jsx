import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <ul className={classes.container}>
          <li>
            <NavLink to="/praca">O nas</NavLink>
          </li>
          <li>
            <NavLink to="/praca">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/praca">Dupa</NavLink>
          </li>
          <li>
            <NavLink to="/praca">Lorem</NavLink>
          </li>
        </ul>
        <ul className={classes.container}>
          <li>
            <NavLink to="/praca">
              <img className={classes.icon} src="/icons/facebook.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/praca">
              <img className={classes.icon} src="icons/twitter.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/praca">
              <img className={classes.icon} src="/icons/linkedin.png" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
