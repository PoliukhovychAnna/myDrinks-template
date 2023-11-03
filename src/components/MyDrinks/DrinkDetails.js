import { useState } from 'react';
import data from '../../db/recipes.json';
import cocktail from '../../cocktail.jpg';
import image from '../../image.png';
import styles from './DrinkDetails.module.css';

export function DrinkDetails({ drink }) {
  const myDrink = data.find(option => option._id.$oid === drink);
  const [imgSrc, setImgSrc] = useState(myDrink.drinkThumb);
  return (
    <div className={styles.container}>
      <div className={styles.descContainer}>
        <div className={styles.descriptionWrapper}>
          <h1 className={styles.drinkTitle}>{myDrink.drink}</h1>
          <p className={styles.drinkCategory}>
            {myDrink.glass} / {myDrink.alcoholic}
          </p>
          <p className={styles.drinkDescription}>{myDrink.description}</p>
          <button className={styles.addBtn}>Add to favorite drinks</button>
        </div>
        <div className={styles.imgThumb}>
          <img
            className={styles.drinkImg}
            src={imgSrc}
            onError={() => setImgSrc(cocktail)}
            alt={myDrink.drink}
            width="400"
            height="400"
          />
        </div>
      </div>
      <div className={styles.ingredientsContainer}>
        <p className={styles.ingredientsTitle}>Ingredients</p>
        <ul className={styles.ingredientsList}>
          {myDrink.ingredients.map(({ title, measure }) => {
            return (
              <li className={styles.ingredientItem}>
                <img
                  className={styles.indredientImg}
                  src={cocktail}
                  width="220"
                  height="220"
                  alt={title}
                />
                <div className={styles.ingredientsDetails}>
                  <p className={styles.ingredientName}>{title}</p>
                  <p className={styles.ingredientMeasure}>{measure}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.preparationContainer}>
        <h2 className={styles.recipeTitle}>Recipe Preparation</h2>
        <div className={styles.recipeWrapper}>
          <img
            className={styles.recipeImg}
            src={image}
            max-width="631"
            height="480"
            alt="cocktail"
          />
          <div className={styles.recipeInstruction}>
            <p className={styles.drinkRecipe}>{myDrink.description}</p>
            <p className={styles.drinkRecipe}>
              {myDrink.instructions} {myDrink.instructionsES}{' '}
              {myDrink.instructionsDE}
            </p>
            <p className={styles.drinkRecipe}>
              {myDrink.instructionsFR} {myDrink.instructionsIT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
