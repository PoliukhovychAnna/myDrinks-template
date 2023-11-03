// import { getUserDrinks } from 'pages/MyDrinksPage';
import styles from './DrinksList.module.css';
import data from '../../db/recipes.json';
import { DrinksListItem } from './DrinksListItem';

export function DrinksList() {
  return (
    <div className={styles.myDrinkListWrapper}>
      <ul className={styles.myDrinksList}>
        {data.map(({ _id, drink, alcoholic, drinkThumb, description }) => {
          return (
            <DrinksListItem
              className
              key={_id.$oid}
              alcoholic={alcoholic}
              picture={drinkThumb}
              title={drink}
              alt={description}
            />
          );
        })}
      </ul>
    </div>
  );
}
