import classes from './Pagination.module.css';

// HELPER COMPONENT TO CREATE NUMBER BUTTONS FOR CURRENT AND FOLLOWING NEXT PAGES IN PAGINATION INSTEAD OF MANUALLY TYPIING ALL OF THEM

const PaginationNumberButtons = (props) => {
  let paginationButtonSteps = Array.from(
    { length: props.numOfButtons },
    (v, i) => i
  );

  return paginationButtonSteps.map((step, value) => {
    const active = props.displayedPageNumber + step === props.highlightedPage;
    return (
      <button
        key={step}
        onClick={props.onButtonClick}
        id={active ? classes.active : ''}
      >
        {props.displayedPageNumber + step}
      </button>
    );
  });
};

export default PaginationNumberButtons;
