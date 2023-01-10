import { NavLink } from 'react-router-dom';
import Wrapper from '../../layout/Wrapper/Wrapper';

import classes from './NoPageFoundCard.module.css';

const NoPageFoundCard = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <p className={classes.number}>404</p>
          <p className={classes.text}>
            Sorry, we can't find that page! You'll find more job offers here.
          </p>
          <NavLink to="/offers">
            <button className={classes.button}>More Offers!</button>
          </NavLink>
        </div>
        <img className={classes.image} src="../../../../404background2.png" />
      </div>
    </>
  );
};

export default NoPageFoundCard;
