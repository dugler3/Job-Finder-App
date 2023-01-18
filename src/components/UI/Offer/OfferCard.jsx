import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import classes from './OfferCard.module.css';

const OfferCard = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { state } = useLocation();

  const bookmarkHandler = () => {
    !isToggled && localStorage.setItem(state.id, JSON.stringify(state));
    isToggled && localStorage.removeItem(state.id);
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.offercard_container}>
        <div>
          <p className={classes.title}>{state.title}</p>
          <p className={classes.category}>{state.category.label}</p>
          <div className={classes.description}>{state.description}</div>
        </div>
        <div className={classes.information}>
          <span className={classes.salary}>£{state.salary_max}</span>
          <span className={classes.type}>{state.contract_time}</span>
          <span className={classes.location}>
            {state.location.display_name}
          </span>
          <a href={state.redirect_url} target="_blank">
            <button>Aplikuj</button>
          </a>
          <a>
            <button className={classes.map}>View map</button>
          </a>
        </div>
        <a className={classes.bookmark} onClick={bookmarkHandler}>
          {!isToggled && <BookmarkBorderOutlinedIcon />}
          {isToggled && <BookmarkOutlinedIcon />}
        </a>
      </div>
    </>
  );
};

export default OfferCard;
