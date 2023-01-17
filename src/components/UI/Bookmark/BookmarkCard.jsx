import { useState } from 'react';
import Wrapper from '../../layout/Wrapper/Wrapper';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import classes from './BookmarkCard.module.css';

const BookmarkCard = () => {
  const [isToggled, setIsToggled] = useState(true);

  const bookmarkHandler = () => {
    // !isToggled && localStorage.setItem(state.id, JSON.stringify(state));
    // isToggled && localStorage.removeItem(state.id);
    setIsToggled((prevState) => !prevState);
  };

  return (
    <>
      <Wrapper>
        {items
          ? items.map((state) => {
              console.log(state);
              return (
                <div key={state.id}>
                  <div className={classes.container}>
                    <div>
                      <span className={classes.title}>{state.title}</span>
                      <span className={classes.category}>
                        {state.category.label}
                      </span>
                      <div className={classes.description}>
                        {state.description}
                      </div>
                    </div>
                    <div className={classes.information}>
                      <span className={classes.salary}>
                        £{state.salary_max}
                      </span>
                      <span className={classes.type}>
                        {state.contract_time}
                      </span>
                      <span className={classes.location}>
                        {state.location.display_name}
                      </span>
                      <a href={state.redirect_url} target="_blank">
                        <button className={classes.button}>Aplikuj</button>
                      </a>
                      <button className={classes.map}>View map</button>
                    </div>
                    <button
                      className={classes.bookmark}
                      onClick={bookmarkHandler}
                    >
                      {!isToggled && <BookmarkBorderOutlinedIcon />}
                      {isToggled && <BookmarkOutlinedIcon />}
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </Wrapper>
    </>
  );
};
export default BookmarkCard;
