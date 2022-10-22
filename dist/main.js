/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printContact)
/* harmony export */ });
function printContact(){
    const main = document.createElement('main');
    main.id = 'contact';
    //Form card
    const form = document.createElement('form');
    const title = document.createElement('div');
    const emailLabel = document.createElement('label');
    const textLabel = document.createElement('label');
    const email = document.createElement('input');
    const textarea = document.createElement('textarea');
    const submit = document.createElement('button');

    title.classList.add('title');
    emailLabel.classList.add('section');
    textLabel.classList.add('section');

    title.innerHTML = 'Contact us';
    emailLabel.innerHTML = 'E-mail address';
    textLabel.innerHTML = 'Message';
    submit.innerHTML = 'Submit';

    email.placeholder = 'user@email.com';
    textarea.placeholder = 'Write you message here...';

    email.name = 'email';
    textarea.name = 'message';

    emailLabel.setAttribute('for','email');
    textLabel.setAttribute('for','message');

    form.appendChild(title);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(textLabel);
    form.appendChild(textarea);
    form.appendChild(submit);

    main.appendChild(form);
    //Number card
    const wrapper = document.createElement('div');
    const title2 = document.createElement('div');
    const section = document.createElement('div');

    title2.classList.add('title');
    section.classList.add('section');

    title2.innerHTML = 'Call us';
    section.innerHTML = "Don't like emails?<br>Call us:<br>123-456-789";

    wrapper.appendChild(title2);
    wrapper.appendChild(section);

    main.appendChild(wrapper);

    document.querySelector('#content').appendChild(main);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printHome)
/* harmony export */ });
/*
        <main id="home">
            <div class="card">
                <div class="title">About</div>
                <div class="section">Lorem ipsum dolor sit amet, pro ne ferri dicant efficiantur, soluta quaestio per ea. Animal tibique tractatos ut est, ad per modo scripta iracundia?<br>Te pri fastidii theophrastus, nisl omnis cetero has ad. Vide suscipiantur cu quo, ex mea soleat periculis torquatos. Vim porro platonem deterruisset cu? Delenit splendide forensibus pro no. In debet soluta nam, eum civibus expetendis et?</div>
            </div>
            <div class="card">
                <div class="title">Location</div>
                <div class="section">4190 Duke Street,<br>Montreal H3C 5K4</div>
                <a href="#"><span id="link" class="material-symbols-outlined">
                    open_in_new
                    </span> Fake google maps link</a>
            </div>
            <div class="card">
                <div class="title">Hours</div>
                <div class="section">Monday-Friday:<br>11am-12am<br><br>
                    Weekend:<br>11am-11pm</div>
            </div>
        </main>
*/

function printHome(){
    const main = document.createElement('main');
    main.id = 'home';
    cards.forEach(card => {
        const wrapper = document.createElement('div');
        const title = document.createElement('div');
        const section = document.createElement('div');

        wrapper.classList.add('card');
        title.classList.add('title');
        section.classList.add('section');

        title.innerHTML = card.title;
        section.innerHTML = card.section;

        wrapper.appendChild(title);
        wrapper.appendChild(section);

        if(card.link){
            const link = document.createElement('a');
            link.innerHTML = card.link;
            link.href = "#";
            wrapper.appendChild(link);
        }

        main.appendChild(wrapper);
    })
    document.querySelector('#content').appendChild(main);
}

class Card{
    constructor(title, section, link){
        this.title = title;
        this.section = section;
        this.link = link;
    }
}

const about = new Card('About','Lorem ipsum dolor sit amet, pro ne ferri dicant efficiantur, soluta quaestio per ea. Animal tibique tractatos ut est, ad per modo scripta iracundia?<br>Te pri fastidii theophrastus, nisl omnis cetero has ad. Vide suscipiantur cu quo, ex mea soleat periculis torquatos. Vim porro platonem deterruisset cu? Delenit splendide forensibus pro no. In debet soluta nam, eum civibus expetendis et?');
const location = new Card('Location','4190 Duke Street,<br>Montreal H3C 5K4','<span id="link" class="material-symbols-outlined">open_in_new</span> Fake google maps link');
const hours = new Card('Hours','Monday-Friday:<br>11am-12am<br><br>Weekend:<br>11am-11pm');

const cards = [];

cards.push(about);
cards.push(location);
cards.push(hours);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMenu)
/* harmony export */ });
function printMenu(){
    const main  = document.createElement('main');
    main.id = 'menu-page';

    menuItems.forEach(item => {
        const wrapper = document.createElement('div');

        const title = document.createElement('div');
        const price = document.createElement('div');
        const section = document.createElement('div');

        title.classList.add('title');
        price.classList.add('price');
        section.classList.add('section');

        title.innerHTML = item.name;
        price.innerHTML = item.price;
        section.innerHTML = item.ingredients;

        wrapper.appendChild(title);
        wrapper.appendChild(price);
        wrapper.appendChild(section);

        main.appendChild(wrapper);
    })
    document.querySelector('#content').appendChild(main);
}

class MenuItem{
    constructor(name,price,ingredients){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

const menuItems = [];

const item1 = new MenuItem('Chicken Bulgogi','12$','onion, garlic, sesame oil, cayenne, chicken breast, soy sauce');
const item2 = new MenuItem('Spicy Cauliflower','10$','cauliflowerettes, diced pepper, onion, hot sauce');
const item3 = new MenuItem('Chilli Tofu','10$','tofu cubes, pepper, onions, chilli, garlic gravy');
const item4 = new MenuItem('Scones','5$','clotted cream, lemon curd, strawberry jam');
const item5 = new MenuItem('Mango Chutney','4$','sweet and sour chutney with spices');
const item6 = new MenuItem('Hommos','7$','chickpea puree, sesame paste, lemon');

menuItems.push(item1,item2,item3,item4,item5,item6);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const displayHeader = (() => {
    const header = document.createElement('header');
    const list = document.createElement('ul');
    const menu = document.createElement('span');

    const links =['Home', 'Menu', 'Contact'];

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = link;
        li.id = link.toLowerCase() + 'Btn';
        li.addEventListener('click', clearDisplay);
        list.appendChild(li);
    })

    menu.id = 'menu';
    menu.classList.add("material-symbols-outlined");
    menu.innerHTML = "menu";

    menu.addEventListener('click', () => {
        document.querySelector('ul').classList.toggle('visible');
    })

    header.appendChild(list);
    header.appendChild(menu);

    document.querySelector('#content').appendChild(header);
})();

const displayPage = (() => {
    document.querySelector('#homeBtn').addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    document.querySelector('#menuBtn').addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    document.querySelector('#contactBtn').addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

function clearDisplay(){
    document.querySelector('main').remove();
}

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25FZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDQztBQUNNOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlFQUFpRSxnREFBUztBQUMxRSxpRUFBaUUsZ0RBQVM7QUFDMUUsb0VBQW9FLG1EQUFZO0FBQ2hGLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLG9EQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludENvbnRhY3QoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaWQgPSAnY29udGFjdCc7XG4gICAgLy9Gb3JtIGNhcmRcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgdGV4dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBlbWFpbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgICB0ZXh0TGFiZWwuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0NvbnRhY3QgdXMnO1xuICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID0gJ0UtbWFpbCBhZGRyZXNzJztcbiAgICB0ZXh0TGFiZWwuaW5uZXJIVE1MID0gJ01lc3NhZ2UnO1xuICAgIHN1Ym1pdC5pbm5lckhUTUwgPSAnU3VibWl0JztcblxuICAgIGVtYWlsLnBsYWNlaG9sZGVyID0gJ3VzZXJAZW1haWwuY29tJztcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdXcml0ZSB5b3UgbWVzc2FnZSBoZXJlLi4uJztcblxuICAgIGVtYWlsLm5hbWUgPSAnZW1haWwnO1xuICAgIHRleHRhcmVhLm5hbWUgPSAnbWVzc2FnZSc7XG5cbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZW1haWwnKTtcbiAgICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdtZXNzYWdlJyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIC8vTnVtYmVyIGNhcmRcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cbiAgICB0aXRsZTIuaW5uZXJIVE1MID0gJ0NhbGwgdXMnO1xuICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gXCJEb24ndCBsaWtlIGVtYWlscz88YnI+Q2FsbCB1czo8YnI+MTIzLTQ1Ni03ODlcIjtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUyKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbik7XG59IiwiLypcbiAgICAgICAgPG1haW4gaWQ9XCJob21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkFib3V0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcHJvIG5lIGZlcnJpIGRpY2FudCBlZmZpY2lhbnR1ciwgc29sdXRhIHF1YWVzdGlvIHBlciBlYS4gQW5pbWFsIHRpYmlxdWUgdHJhY3RhdG9zIHV0IGVzdCwgYWQgcGVyIG1vZG8gc2NyaXB0YSBpcmFjdW5kaWE/PGJyPlRlIHByaSBmYXN0aWRpaSB0aGVvcGhyYXN0dXMsIG5pc2wgb21uaXMgY2V0ZXJvIGhhcyBhZC4gVmlkZSBzdXNjaXBpYW50dXIgY3UgcXVvLCBleCBtZWEgc29sZWF0IHBlcmljdWxpcyB0b3JxdWF0b3MuIFZpbSBwb3JybyBwbGF0b25lbSBkZXRlcnJ1aXNzZXQgY3U/IERlbGVuaXQgc3BsZW5kaWRlIGZvcmVuc2lidXMgcHJvIG5vLiBJbiBkZWJldCBzb2x1dGEgbmFtLCBldW0gY2l2aWJ1cyBleHBldGVuZGlzIGV0PzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkxvY2F0aW9uPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj40MTkwIER1a2UgU3RyZWV0LDxicj5Nb250cmVhbCBIM0MgNUs0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3BhbiBpZD1cImxpbmtcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgb3Blbl9pbl9uZXdcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiBGYWtlIGdvb2dsZSBtYXBzIGxpbms8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+SG91cnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPk1vbmRheS1GcmlkYXk6PGJyPjExYW0tMTJhbTxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIFdlZWtlbmQ6PGJyPjExYW0tMTFwbTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50SG9tZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pZCA9ICdob21lJztcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gY2FyZC50aXRsZTtcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSBjYXJkLnNlY3Rpb247XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICAgICAgaWYoY2FyZC5saW5rKXtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rLmlubmVySFRNTCA9IGNhcmQubGluaztcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IFwiI1wiO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5jbGFzcyBDYXJke1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBzZWN0aW9uLCBsaW5rKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgIH1cbn1cblxuY29uc3QgYWJvdXQgPSBuZXcgQ2FyZCgnQWJvdXQnLCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgcHJvIG5lIGZlcnJpIGRpY2FudCBlZmZpY2lhbnR1ciwgc29sdXRhIHF1YWVzdGlvIHBlciBlYS4gQW5pbWFsIHRpYmlxdWUgdHJhY3RhdG9zIHV0IGVzdCwgYWQgcGVyIG1vZG8gc2NyaXB0YSBpcmFjdW5kaWE/PGJyPlRlIHByaSBmYXN0aWRpaSB0aGVvcGhyYXN0dXMsIG5pc2wgb21uaXMgY2V0ZXJvIGhhcyBhZC4gVmlkZSBzdXNjaXBpYW50dXIgY3UgcXVvLCBleCBtZWEgc29sZWF0IHBlcmljdWxpcyB0b3JxdWF0b3MuIFZpbSBwb3JybyBwbGF0b25lbSBkZXRlcnJ1aXNzZXQgY3U/IERlbGVuaXQgc3BsZW5kaWRlIGZvcmVuc2lidXMgcHJvIG5vLiBJbiBkZWJldCBzb2x1dGEgbmFtLCBldW0gY2l2aWJ1cyBleHBldGVuZGlzIGV0PycpO1xuY29uc3QgbG9jYXRpb24gPSBuZXcgQ2FyZCgnTG9jYXRpb24nLCc0MTkwIER1a2UgU3RyZWV0LDxicj5Nb250cmVhbCBIM0MgNUs0JywnPHNwYW4gaWQ9XCJsaW5rXCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+b3Blbl9pbl9uZXc8L3NwYW4+IEZha2UgZ29vZ2xlIG1hcHMgbGluaycpO1xuY29uc3QgaG91cnMgPSBuZXcgQ2FyZCgnSG91cnMnLCdNb25kYXktRnJpZGF5Ojxicj4xMWFtLTEyYW08YnI+PGJyPldlZWtlbmQ6PGJyPjExYW0tMTFwbScpO1xuXG5jb25zdCBjYXJkcyA9IFtdO1xuXG5jYXJkcy5wdXNoKGFib3V0KTtcbmNhcmRzLnB1c2gobG9jYXRpb24pO1xuY2FyZHMucHVzaChob3Vycyk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZW51KCl7XG4gICAgY29uc3QgbWFpbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pZCA9ICdtZW51LXBhZ2UnO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XG5cbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBwcmljZS5pbm5lckhUTUwgPSBpdGVtLnByaWNlO1xuICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9IGl0ZW0uaW5ncmVkaWVudHM7XG5cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5jbGFzcyBNZW51SXRlbXtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLHByaWNlLGluZ3JlZGllbnRzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XG4gICAgfVxufVxuXG5jb25zdCBtZW51SXRlbXMgPSBbXTtcblxuY29uc3QgaXRlbTEgPSBuZXcgTWVudUl0ZW0oJ0NoaWNrZW4gQnVsZ29naScsJzEyJCcsJ29uaW9uLCBnYXJsaWMsIHNlc2FtZSBvaWwsIGNheWVubmUsIGNoaWNrZW4gYnJlYXN0LCBzb3kgc2F1Y2UnKTtcbmNvbnN0IGl0ZW0yID0gbmV3IE1lbnVJdGVtKCdTcGljeSBDYXVsaWZsb3dlcicsJzEwJCcsJ2NhdWxpZmxvd2VyZXR0ZXMsIGRpY2VkIHBlcHBlciwgb25pb24sIGhvdCBzYXVjZScpO1xuY29uc3QgaXRlbTMgPSBuZXcgTWVudUl0ZW0oJ0NoaWxsaSBUb2Z1JywnMTAkJywndG9mdSBjdWJlcywgcGVwcGVyLCBvbmlvbnMsIGNoaWxsaSwgZ2FybGljIGdyYXZ5Jyk7XG5jb25zdCBpdGVtNCA9IG5ldyBNZW51SXRlbSgnU2NvbmVzJywnNSQnLCdjbG90dGVkIGNyZWFtLCBsZW1vbiBjdXJkLCBzdHJhd2JlcnJ5IGphbScpO1xuY29uc3QgaXRlbTUgPSBuZXcgTWVudUl0ZW0oJ01hbmdvIENodXRuZXknLCc0JCcsJ3N3ZWV0IGFuZCBzb3VyIGNodXRuZXkgd2l0aCBzcGljZXMnKTtcbmNvbnN0IGl0ZW02ID0gbmV3IE1lbnVJdGVtKCdIb21tb3MnLCc3JCcsJ2NoaWNrcGVhIHB1cmVlLCBzZXNhbWUgcGFzdGUsIGxlbW9uJyk7XG5cbm1lbnVJdGVtcy5wdXNoKGl0ZW0xLGl0ZW0yLGl0ZW0zLGl0ZW00LGl0ZW01LGl0ZW02KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcmludEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IHByaW50TWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHByaW50Q29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jb25zdCBkaXNwbGF5SGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgY29uc3QgbGlua3MgPVsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcblxuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBsaW5rO1xuICAgICAgICBsaS5pZCA9IGxpbmsudG9Mb3dlckNhc2UoKSArICdCdG4nO1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyRGlzcGxheSk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG5cbiAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgbWVudS5pbm5lckhUTUwgPSBcIm1lbnVcIjtcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICAgIH0pXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSkoKTtcblxuY29uc3QgZGlzcGxheVBhZ2UgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludEhvbWUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludE1lbnUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludENvbnRhY3QpO1xufSkoKTtcblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnJlbW92ZSgpO1xufVxuXG5wcmludEhvbWUoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9