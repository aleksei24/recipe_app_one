import {
  MEALS,
  MEAL_INFO,
  MEAL_POPUP,
  CLOSE_BTN,
  HEADER_SEARCH_BUTTON,
  HEADER_SEARCH_INPUT,
} from './view';

async function getRandomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];
    addMeal(randomMeal, true);
    // console.log(randomMeal);
  } catch (err) {
    console.error(err);
  }
}

async function getMealsBySearch(meal) {
  if (typeof meal !== 'string') {
    return;
  }
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    const responseData = await response.json();
    const meals = await responseData.meals;
    return meals;
  } catch (err) {
    console.error(err);
  }
}

function addMeal(mealData, random = false) {
  const meal = document.createElement('article');
  meal.classList = 'meal';
  meal.innerHTML = `
  <div class="meal__header" id="put-pic-four">
    <img src='${mealData.strMealThumb}' alt='${mealData.Meal}'
  </div>
  <div class="meal__body">
    <h5>${mealData.strMeal}</h5>
  </div>
  `;

  meal.addEventListener('click', () => {
    showMealInfo(mealData);
  });

  MEALS.appendChild(meal);
}

function showMealInfo(mealData) {
  MEAL_INFO.innerHTML = '';
  const mealEl = document.createElement('article');
  const ingredients = [];

  for (let i = 1; i < 20; i++) {
    if (mealData['strIngredient' + i]) {
      ingredients.push(`${mealData['strIngredient' + i]}/${mealData['strMeasure' + i]}`);
    } else {
      break;
    }
  }

  mealEl.innerHTML = `
    <h2>${mealData.strMeal}</h2>
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
    <h5>${mealData.strArea} cuisine</h5>
    <ul>
      ${ingredients.map((el) => `<li>${el}</li>`).join('')}
    </ul>
    <p>
      ${mealData.strInstructions}
    </p>
  `;

  MEAL_INFO.appendChild(mealEl);
  MEAL_POPUP.hidden = false;
  MEALS.hidden = true;
}

HEADER_SEARCH_BUTTON.addEventListener('click', async () => {
  MEALS.innerHTML = '';
  const search = HEADER_SEARCH_INPUT.value;
  const meals = await getMealsBySearch(search);
  HEADER_SEARCH_INPUT.value = '';

  if (meals) {
    meals.forEach((element) => {
      addMeal(element);
    });
  }
});

CLOSE_BTN.addEventListener('click', () => {
  MEAL_POPUP.hidden = true;
  MEALS.hidden = false;
});

getRandomMeal();
