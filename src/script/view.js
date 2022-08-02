const BODY = document.body;
export const APP = document.createElement('div');
APP.setAttribute('id', 'app');
APP.setAttribute('class', 'app');
BODY.append(APP);
// console.log(body);

const HEADER = document.createElement('header');
HEADER.setAttribute('id', 'header');
HEADER.setAttribute('class', 'header');
APP.append(HEADER);

const MAIN_HEADLINE = document.createElement('h1');
MAIN_HEADLINE.setAttribute('id', 'main-headline');
MAIN_HEADLINE.textContent = 'Recipe App';
HEADER.append(MAIN_HEADLINE);

const HEADER_SEARCH = document.createElement('div');
const HEADER_SEARCH_LABEL = document.createElement('label');
export const HEADER_SEARCH_INPUT = document.createElement('input');
export const HEADER_SEARCH_BUTTON = document.createElement('button');
HEADER_SEARCH.append(HEADER_SEARCH_LABEL, HEADER_SEARCH_INPUT, HEADER_SEARCH_BUTTON);
HEADER.append(HEADER_SEARCH);
HEADER_SEARCH.setAttribute('class', 'header__search search-header');
HEADER_SEARCH_LABEL.setAttribute('for', 'search');
HEADER_SEARCH_LABEL.innerHTML =
  "Type any ingredient and you'll see a bunch of recipes containing what you've typed";
HEADER_SEARCH_INPUT.setAttribute('id', 'search');
HEADER_SEARCH_INPUT.setAttribute('title', 'search');
HEADER_SEARCH_INPUT.setAttribute('type', 'text');
HEADER_SEARCH_INPUT.setAttribute('class', 'search-header__input');
HEADER_SEARCH_BUTTON.setAttribute('type', 'button');
HEADER_SEARCH_BUTTON.setAttribute('id', 'searchBtn');
HEADER_SEARCH_BUTTON.setAttribute('class', 'search-header__btn btn');
HEADER_SEARCH_BUTTON.setAttribute('type', 'button');
HEADER_SEARCH_BUTTON.innerHTML = 'Search';

export const MEALS = document.createElement('div');
MEALS.setAttribute('id', 'meals');
MEALS.setAttribute('class', 'meals');
APP.append(MEALS);

export const MEAL_POPUP = document.createElement('div');
MEAL_POPUP.setAttribute('id', 'meal-popup');
MEAL_POPUP.setAttribute('class', 'meal-popup');
MEAL_POPUP.hidden = true;
APP.append(MEAL_POPUP);

const MEAL_POPUP_CONTAINER = document.createElement('div');
MEAL_POPUP_CONTAINER.setAttribute('class', 'meal-popup__container');
export const CLOSE_BTN = document.createElement('button');
CLOSE_BTN.setAttribute('type', 'button');
CLOSE_BTN.setAttribute('id', 'close-btn');
CLOSE_BTN.innerHTML = 'Close';

export const MEAL_INFO = document.createElement('div');
MEAL_INFO.setAttribute('class', 'meal-info');
MEAL_INFO.setAttribute('id', 'meal-info');

MEAL_POPUP.append(MEAL_POPUP_CONTAINER);
MEAL_POPUP_CONTAINER.append(CLOSE_BTN, MEAL_INFO);
