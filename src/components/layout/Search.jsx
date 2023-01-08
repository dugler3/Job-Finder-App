import classes from './Search.module.css';

const Search = () => {
  return (
    <>
      <div className={classes.container}>
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

        <button className={classes.button}>Szukaj</button>
      </div>
    </>
  );
};

export default Search;
