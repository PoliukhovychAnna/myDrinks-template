// import { getUserDrinks } from 'pages/MyDrinksPage';
import styles from './DrinksList.module.css';
import data from '../../db/recipes.json';
import { DrinkItem } from './DrinkItem';

export const DrinksList = () => {
  return (
    <div>
      <ul className={styles.myDrinksList}>
        {data.map(({ _id, drink, alcoholic, drinkThumb, description }) => {
          return (
            <DrinkItem
              className
              key={_id.$oid}
              alcoholic={alcoholic}
              picture={drinkThumb}
              title={drink}
              alt={description}
            ></DrinkItem>
          );
        })}
      </ul>
    </div>
  );
};
