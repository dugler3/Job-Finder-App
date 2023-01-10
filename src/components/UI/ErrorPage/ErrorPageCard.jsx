import classes from './ErrorPageCard.module.css';

const ErrorPageCard = () => {
  return (
    <>
      <p className={classes.text}>Oops, something went wrong</p>
      <img src="../../../../public/error-image2.png" />
    </>
  );
};

export default ErrorPageCard;
