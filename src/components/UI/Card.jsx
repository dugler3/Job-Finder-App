import classes from './Card.module.css';

import { Info } from '../HomePage/Info';

const Card = () => {
  return (
    <div className={classes.container}>
      {Info.map((element) => {
        return (
          <div className={classes.card} key={element.id}>
            <div className={classes.top}>
              <div className={classes.title}>{element.title}</div>
              <img
                className={classes.image}
                src={`${element.image}`}
                alt="jhgjh"
              />
            </div>
            <div className={classes.desc}>{element.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
