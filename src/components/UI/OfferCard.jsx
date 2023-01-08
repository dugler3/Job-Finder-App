import { useState } from 'react';
import classes from './OfferCard.module.css';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { useNavigate } from 'react-router-dom';

const OfferCard = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const bookmarkHandler = () => {
    setIsToggled((prevState) => !prevState);
  };

  const navigateButtonHandler = () => {
    navigate(`/praca/${props.details.id}`);
  };
  return (
    <div className={classes.container}>
      <div className={classes.offer}>
        <div className={classes.info}>
          <span className={classes.title}>{props.details.title}</span>
          <div className={classes.category}>{props.details.category.label}</div>
          <div className={classes.details}>
            <div className={classes.company}>
              {props.details.company.display_name}
            </div>
            <div className={classes.location}>
              {props.details.location.display_name}
            </div>
          </div>
        </div>
        {props.details.salary_min !== props.details.salary_max && (
          <div className={classes.salaryContainer}>
            <span className={classes.salary}>
              £{props.details.salary_min.toFixed(2)}
            </span>
            <span> - </span>
            <span className={classes.salary}>
              £{props.details.salary_max.toFixed(2)}
            </span>
          </div>
        )}
        {props.details.salary_min === props.details.salary_max && (
          <div className={classes.salaryContainer}>
            <span className={classes.salary}>
              £{props.details.salary_max.toFixed(2)}
            </span>
          </div>
        )}
      </div>

      <p className={classes.description}>{props.details.description}</p>

      <button className={classes.button} onClick={navigateButtonHandler}>
        Przejdź do oferty
      </button>

      <button className={classes.bookmark} onClick={bookmarkHandler}>
        {!isToggled && <BookmarkBorderOutlinedIcon />}
        {isToggled && <BookmarkOutlinedIcon />}
      </button>
    </div>
  );
};

export default OfferCard;
