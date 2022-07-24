console.log('Hi, everyone!');

const body = document.body;
const APP = document.createElement('div');
APP.setAttribute('id', 'app');
APP.setAttribute('class', 'app');
body.append(APP);
// console.log(body);

const MAIN_HEADLINE = document.createElement('h1');
MAIN_HEADLINE.setAttribute('id', 'main-headline');
MAIN_HEADLINE.textContent = 'Hello';
APP.append(MAIN_HEADLINE);
