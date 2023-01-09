import classes from './Offer.module.css'

const Offer = (props) => {
  return <>

      <div className={classes.container}>
        <div>
          <p className={classes.title}>{props.details.title}</p>
          <p>{props.details.category.label}</p>
          <div className={classes.description}>{props.details.description}</div>
        </div>
        <div className={classes.information}>
          <div className={classes.salary}>
            <span>salary: </span>
            <span>{props.details.salary_max}</span>
          </div>
          <div className={classes.type}>
            <span>contract time: </span>
            <span>{props.details.contract_time}</span></div>
          <div className={classes.location}>
            <span>Localization: </span>
            <span>{props.details.location.display_name}</span>
          </div>
          <button className={classes.button}>Aplikuj</button>
          <div className={classes.map}>map</div>
        </div>
      </div>
  </>;
};

export default Offer;