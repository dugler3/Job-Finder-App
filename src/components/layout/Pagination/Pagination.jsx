import classes from './Pagination.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PaginationNumberButtons from './PaginationNumberButtons';

const Pagination = (props) => {
  // Define how many buttons with page number should be in component besides last page (E.X for numOfButtons = 4 => 1 2 3 4 ... last page )
  const numOfButtons = 4;

  let requestedPageNumber = props.page;

  let displayedPageNumber =
    props.page > props.numPages - numOfButtons
      ? props.numPages - numOfButtons
      : props.page;

  let action;

  // DOUBLE ARROW CHANGE

  const doubleArrowChangeHandler = (event) => {
    const buttonName = event.target.closest('button').name;

    buttonName === 'first' ? (action = 1) : (action = props.numPages);

    // CONDITIONS

    if (requestedPageNumber === 1 && action === 1) {
      return;
    }
    if (requestedPageNumber === props.numPages && action === props.numPages) {
      return;
    }
    props.pageChangeHandler(action);
  };

  // ARROW CHANGE

  const arrowChangeHandler = (event) => {
    const buttonName = event.target.closest('button').name;

    buttonName === 'forward' ? (action = 1) : (action = -1);

    // CONDITIONS

    if (requestedPageNumber === 1 && action === -1) {
      return;
    }
    if (requestedPageNumber === props.numPages && action === 1) {
      return;
    }
    props.pageChangeHandler(requestedPageNumber + action);
  };

  // NUMBER CHANGE

  // CONDITIONS
  const numberChangeHandler = (event) => {
    const clickedNumber = +event.target.innerText;
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
        currentPageNumber={displayedPageNumber}
      />
      {requestedPageNumber < props.numPages - numOfButtons && (
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
