import classes from './ErrorPageCard.module.css';

const ErrorPageCard = () => {
  return (
    <div className={classes.error_container}>
      <p className={classes.text}>Oops, something went wrong</p>
      <img src="../../../../error-image2.png" />
    </div>
  );
};

export default ErrorPageCard;
