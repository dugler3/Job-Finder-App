import classes from './Pagination.module.css';

// HELPER COMPONENT TO CREATE 5 BUTTONS FOR CURRENT AND 4 NEXT PAGES IN PAGINATION INSTEAD OF MANUALLY TYPIING ALL OF THEM

const PaginationNumberButtons = (props) => {
  let paginationButtonSteps = Array.from(
    { length: props.numOfButtons },
    (v, i) => i
  );

  return paginationButtonSteps.map((step) => {
    return (
      <button
        key={step}
        name="number"
        className={classes.button}
        onClick={props.onButtonClick}
      >
        {props.currentPageNumber + step}
      </button>
    );
  });
};

export default PaginationNumberButtons;