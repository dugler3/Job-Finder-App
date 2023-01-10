import classes from './Pagination.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationNumberButtons from './PaginationNumberButtons';
import { useState } from 'react';

const Pagination = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(props.page);
  let action;

  // Define how many buttons with page number should be in component besides last page (E.X for numOfButtons = 4 => 1 2 3 4 ... last page )
  const numOfButtons = 4;

  // DOUBLE ARROW CHANGE

  const doubleArrowChangeHandler = (event) => {
    const buttonName = event.target.closest('button').name;

    buttonName === 'first' ? (action = 1) : (action = props.numPages);

    // CONDITIONS

    if (currentPageNumber === 1 && action === 1) {
      return;
    }
    if (currentPageNumber === props.numPages && action === props.numPage) {
      return;
    }
    if (action === props.numPages) {
      // goToPage = action;
      setCurrentPageNumber(action - numOfButtons);
    } else {
      // goToPage = action;
      setCurrentPageNumber(action);
    }
    props.pageChangeHandler(action);
  };

  // ARROW CHANGE

  const arrowChangeHandler = (event) => {
    const buttonName = event.target.closest('button').name;

    buttonName === 'forward' ? (action = 1) : (action = -1);

    // CONDITIONS

    if (currentPageNumber === 1 && action === -1) {
      return;
    }
    if (currentPageNumber === props.numPages && action === 1) {
      return;
    }
    if (currentPageNumber <= props.numPages - numOfButtons && action === -1) {
      setCurrentPageNumber((prevState) => prevState + action);
    }
    if (currentPageNumber < props.numPages - numOfButtons && action === 1) {
      setCurrentPageNumber((prevState) => prevState + action);
    }
    props.pageChangeHandler((prevState) => prevState + action);
  };
  // NUMBER CHANGE

  // CONDITIONS
  const numberChangeHandler = (event) => {
    const clickedNumber = +event.target.innerText;

    if (clickedNumber >= props.numPages - numOfButtons) {
      setCurrentPageNumber(props.numPages - numOfButtons);
    } else {
      setCurrentPageNumber(clickedNumber);
    }
    props.pageChangeHandler(clickedNumber);
  };

  return (
    <div className={classes.pagination}>
      <button
        className={classes.button}
        name="first"
        onClick={doubleArrowChangeHandler}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button
        className={classes.button}
        name="back"
        onClick={arrowChangeHandler}
      >
        <ArrowBackIosNewIcon />
      </button>
      <PaginationNumberButtons
        onButtonClick={numberChangeHandler}
        numOfButtons={numOfButtons}
        currentPageNumber={currentPageNumber}
      />
      {currentPageNumber < props.numPages - numOfButtons && (
        <span className={classes.button}>...</span>
      )}
      <button
        className={classes.button}
        name="number"
        onClick={numberChangeHandler}
      >
        {props.numPages}
      </button>
      <button
        className={classes.button}
        name="forward"
        onClick={arrowChangeHandler}
      >
        <ArrowForwardIosIcon />
      </button>
      <button
        className={classes.button}
        name="last"
        onClick={doubleArrowChangeHandler}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
