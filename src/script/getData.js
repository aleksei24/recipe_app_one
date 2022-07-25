async function getRandomMeal() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const responseData = await response.json();
    const randomMeal = responseData.meals[0];
    console.log(randomMeal);
  } catch (err) {
    console.error(err);
  }
}

getRandomMeal();
