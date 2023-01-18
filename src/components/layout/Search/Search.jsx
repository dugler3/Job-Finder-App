import classes from './Search.module.css';

const Search = () => {
  return (
    <>
      <div className={classes.search_container}>
        <form>
          <input
            type="text"
            placeholder="Stanowisko, firma"
            className={classes.search}
          />
        </form>
        <form>
          <input
            type="text"
            placeholder="Lokalizacja"
            className={classes.localization}
          />
        </form>

        <button>Szukaj</button>
      </div>
    </>
  );
};

export default Search;
