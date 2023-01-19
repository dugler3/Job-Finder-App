import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import classes from './OfferCard.module.css';

const OfferCard = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const { state } = useLocation();
  const bookmarkState = props.state;

  const offer = state ?? bookmarkState;

  const bookmarkHandler = () => {
    !isToggled && localStorage.setItem(offer.id, JSON.stringify(offer));
    isToggled && localStorage.removeItem(offer.id);
    setIsToggled((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes.offercard_container}>
        <div className={classes.left}>
          <div>
            <p className={classes.title}>{offer.title}</p>
            <p className={classes.category}>{offer.category.label}</p>
          </div>
          <div className={classes.description}>{offer.description}</div>
        </div>
        <div className={classes.information}>
          <span className={classes.salary}>£{offer.salary_max}</span>
          <span className={classes.type}>{offer.contract_time}</span>
          <span className={classes.location}>
            {offer.location.display_name}
          </span>
          <a href={offer.redirect_url} target="_blank">
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
