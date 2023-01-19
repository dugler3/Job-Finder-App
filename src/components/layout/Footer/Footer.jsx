import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer_container}>
        <ul className={classes.footer_container}>
          <li>
            <NavLink to="/offers">About</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Get in touch</NavLink>
          </li>
          <li>
            <NavLink to="/offers">Lorem</NavLink>
          </li>
        </ul>
        <ul className={classes.footer_container}>
          <li>
            <NavLink to="/offers">
              <img className={classes.icon} src="/icons/facebook.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers">
              <img className={classes.icon} src="/icons/twitter.png" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/offers">
              <img className={classes.icon} src="/icons/linkedin.png" />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
