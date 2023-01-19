import { NavLink } from 'react-router-dom';

import classes from './NoBookmarkCard.module.css';

const NoBookmarkCard = () => {
  console.log('dupa');
  return (
    <>
      <div className={classes.nobookmark_container}>
        <div>
          <p>Looks like you didn't save any offer yet.</p>
          <p>Make sure to check them out here.</p>
          <NavLink to="/offers">
            <button className={classes.button}>More Offers!</button>
          </NavLink>
        </div>
        <img src="../../../../nobookmarkpage.png" />
      </div>
    </>
  );
};

export default NoBookmarkCard;
