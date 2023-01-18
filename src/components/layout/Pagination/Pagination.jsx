import PaginationNumberButtons from './PaginationNumberButtons';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import classes from './Pagination.module.css';

const Pagination = ({ page, pageCount, pageChangeHandler }) => {
  // Define how many siblings buttons should be in component (E.X for numOfButtons = 4 => 1 2 3 4 ... last page )
  const numOfButtons = 3;

  // Display correct siblings buttons
  let displayedPageNumber = page - 1;

  if (page > pageCount - numOfButtons) {
    displayedPageNumber = pageCount - numOfButtons;
  }
  if (page === 1) {
    displayedPageNumber = page;
  }

  const numberChangeHandler = (event) => {
    const clickedNumber = +event.target.innerText;

    if (page === clickedNumber) {
      return;
    }
    pageChangeHandler(clickedNumber);
  };
  return (
    <div className={classes.pagination}>
      <button
        disabled={page === 1}
        onClick={() => {
          pageChangeHandler(1);
        }}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <button
        disabled={page === 1}
        onClick={() => {
          pageChangeHandler(page - 1);
        }}
      >
        <ArrowBackIosNewIcon />
      </button>
      <PaginationNumberButtons
        onButtonClick={numberChangeHandler}
        numOfButtons={numOfButtons}
        displayedPageNumber={displayedPageNumber}
        highlightedPage={page}
      />
      {page <= pageCount - numOfButtons && (
        <span className={classes.dots}>...</span>
      )}
      <button
        id={page === pageCount ? classes.active : ''}
        onClick={numberChangeHandler}
      >
        {pageCount}
      </button>
      <button
        disabled={page === pageCount}
        onClick={() => {
          pageChangeHandler(page + 1);
        }}
      >
        <ArrowForwardIosIcon />
      </button>
      <button
        disabled={page === pageCount}
        onClick={() => {
          pageChangeHandler(pageCount);
        }}
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
