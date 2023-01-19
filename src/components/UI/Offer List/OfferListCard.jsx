import { useState } from 'react';
import classes from './OfferListCard.module.css';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const OfferListCard = (props) => {
  const [isToggled, setIsToggled] = useState();
  // const [searchParams, setSearchParams] = useSearchParams('');

  const navigate = useNavigate();

  const bookmarkHandler = () => {
    props.offerFinder(props.details.id);
    !isToggled &&
      localStorage.setItem(props.details.id, JSON.stringify(props.details));
    isToggled && localStorage.removeItem(props.details.id);
    setIsToggled((prevState) => !prevState);
  };

  const navigateButtonHandler = () => {
    // setSearchParams({ id: props.details.id });
    const offer = props.offerFinder(props.details.id);

    navigate(`/offers/${props.details.id}`, { state: offer });
  };
  return (
    <div className={classes.container}>
      <div className={classes.upperinfo}>
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

      <button onClick={navigateButtonHandler}>Przejdź do oferty</button>

      <a className={classes.bookmark} onClick={bookmarkHandler}>
        {!isToggled && <BookmarkBorderOutlinedIcon />}
        {isToggled && <BookmarkOutlinedIcon />}
      </a>
    </div>
  );
};

export default OfferListCard;
