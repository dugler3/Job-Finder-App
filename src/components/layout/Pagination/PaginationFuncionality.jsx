const pageChangeHandler = (event) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  let goToPage;
  let action;

  if (event.target.closest('button').name === 'forward') {
    action = 1;
  } else if (event.target.closest('button').name === 'back') {
    action = -1;
  } else if (event.target.closest('button').name === 'last') {
    action = props.numPages;
  } else if (event.target.closest('button').name === 'first') {
    action = 1;
  } else if (event.target.closest('button').name === 'number') {
    action = +event.target.innerText;
  }

  // DOUBLE ARROW CHANGE

  // CONDITIONS

  if (currentPageNumber === 1 && action === 1) {
    return;
  }
  if (currentPageNumber === props.numPages && action === props.numPage) {
    return;
  }
  if (action === props.numPages) {
    goToPage = action - 5;
    setCurrentPageNumber(goToPage);
  } else {
    goToPage = action;
    setCurrentPageNumber(goToPage);
  }
  console.log(goToPage);

  // ARROW CHANGE

  // CONDITIONS

  if (currentPageNumber === 1 && action === -1) {
    return;
  }
  if (goToPage === props.numPages && action === 1) {
    return;
  }
  if (
    currentPageNumber >= props.numPages - 5 &&
    action === 1 &&
    goToPage <= props.numPage
  ) {
    goToPage += 1;
    console.log(goToPage);
  } else {
    setCurrentPageNumber((prevState) => prevState + action);

    goToPage = currentPageNumber + action;

    console.log(goToPage);
  }

  // NUMBER CHANGE

  // CONDITIONS

  if (+event.target.innerText >= props.numPages - 5) {
    setCurrentPageNumber(props.numPages - 5);
  } else {
    setCurrentPageNumber(+event.target.innerText);
  }
  goToPage = +event.target.innerText;
  console.log(goToPage);
};

// const [currentPageNumber, setCurrentPageNumber] = useState(1);
// let goToPage;

// // DOUBLE ARROW CHANGE

// const doubleArrowChangeHandler = (event) => {
//   goToPage = currentPageNumber;
//   event.target.closest('button').name === 'forward'
//     ? (goToPage = props.numPages)
//     : (goToPage = 1);

//   // CONDITIONS

//   if (currentPageNumber === 1 && goToPage === 1) {
//     return;
//   }
//   if (currentPageNumber === props.numPages && goToPage === props.numPage) {
//     return;
//   }
//   if (goToPage === props.numPages) {
//     setCurrentPageNumber(goToPage - 5);
//   } else {
//     setCurrentPageNumber(goToPage);
//   }
//   console.log(goToPage);
// };

// // ARROW CHANGE

// const arrowChangeHandler = (event) => {
//   goToPage = currentPageNumber;
//   let action;
//   event.target.closest('button').name === 'forward'
//     ? (action = 1)
//     : (action = -1);

//   // CONDITIONS

//   if (currentPageNumber === 1 && action === -1) {
//     return;
//   }
//   if (goToPage === props.numPages && action === 1) {
//     return;
//   }
//   if (currentPageNumber >= props.numPages - 5 && action === 1) {
//     console.log(goToPage);
//     return;
//   }

//   setCurrentPageNumber((prevState) => prevState + action);

//   goToPage = currentPageNumber + action;

//   console.log(goToPage);
// };

// // NUMBER CHANGE

// const numberChangeHandler = (event) => {
//   goToPage = currentPageNumber;
//   // CONDITIONS

//   if (+event.target.innerText >= props.numPages - 5) {
//     setCurrentPageNumber(props.numPages - 5);
//   } else {
//     setCurrentPageNumber(+event.target.innerText);
//   }
//   goToPage = +event.target.innerText;
//   console.log(goToPage);
// };
