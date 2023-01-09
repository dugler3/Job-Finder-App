import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import classes from './OfferCard.module.css';

const OfferCard = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { state } = useLocation();

  const bookmarkHandler = () => {
    console.log(state);
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <p className={classes.title}>{state.title}</p>
          <p className={classes.category}>{state.category.label}</p>
          <div className={classes.description}>{state.description}</div>
        </div>
        <div className={classes.information}>
          <div className={classes.salary}>
            <span>salary: </span>
            <span>{state.salary_max}</span>
          </div>
          <div className={classes.type}>
            <span>contract time: </span>
            <span>{state.contract_time}</span>
          </div>
          <div className={classes.location}>
            <span>Localization: </span>
            <span>{state.location.display_name}</span>
          </div>
          <button className={classes.button}>Aplikuj</button>
          <div className={classes.map}>map</div>
        </div>
        <button className={classes.bookmark} onClick={bookmarkHandler}>
          {!isToggled && <BookmarkBorderOutlinedIcon />}
          {isToggled && <BookmarkOutlinedIcon />}
        </button>
      </div>
    </>
  );
};

export default OfferCard;
