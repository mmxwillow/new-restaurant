/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
})();

function clearDisplay(){
    document.querySelector('main').remove();
}

//printHome();
(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25FZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlFQUFpRSxnREFBUztBQUMxRSxpRUFBaUUsZ0RBQVM7QUFDMUUsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25ldy1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgICAgIDxtYWluIGlkPVwiaG9tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5BYm91dDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHBybyBuZSBmZXJyaSBkaWNhbnQgZWZmaWNpYW50dXIsIHNvbHV0YSBxdWFlc3RpbyBwZXIgZWEuIEFuaW1hbCB0aWJpcXVlIHRyYWN0YXRvcyB1dCBlc3QsIGFkIHBlciBtb2RvIHNjcmlwdGEgaXJhY3VuZGlhPzxicj5UZSBwcmkgZmFzdGlkaWkgdGhlb3BocmFzdHVzLCBuaXNsIG9tbmlzIGNldGVybyBoYXMgYWQuIFZpZGUgc3VzY2lwaWFudHVyIGN1IHF1bywgZXggbWVhIHNvbGVhdCBwZXJpY3VsaXMgdG9ycXVhdG9zLiBWaW0gcG9ycm8gcGxhdG9uZW0gZGV0ZXJydWlzc2V0IGN1PyBEZWxlbml0IHNwbGVuZGlkZSBmb3JlbnNpYnVzIHBybyBuby4gSW4gZGViZXQgc29sdXRhIG5hbSwgZXVtIGNpdmlidXMgZXhwZXRlbmRpcyBldD88L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5Mb2NhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+NDE5MCBEdWtlIFN0cmVldCw8YnI+TW9udHJlYWwgSDNDIDVLNDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4gaWQ9XCJsaW5rXCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIG9wZW5faW5fbmV3XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gRmFrZSBnb29nbGUgbWFwcyBsaW5rPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPkhvdXJzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5Nb25kYXktRnJpZGF5Ojxicj4xMWFtLTEyYW08YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICBXZWVrZW5kOjxicj4xMWFtLTExcG08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4qL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludEhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaWQgPSAnaG9tZSc7XG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNhcmQudGl0bGU7XG4gICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gY2FyZC5zZWN0aW9uO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgICAgIGlmKGNhcmQubGluayl7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGluay5pbm5lckhUTUwgPSBjYXJkLmxpbms7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBcIiNcIjtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuY2xhc3MgQ2FyZHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgc2VjdGlvbiwgbGluayl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gc2VjdGlvbjtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICB9XG59XG5cbmNvbnN0IGFib3V0ID0gbmV3IENhcmQoJ0Fib3V0JywnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHBybyBuZSBmZXJyaSBkaWNhbnQgZWZmaWNpYW50dXIsIHNvbHV0YSBxdWFlc3RpbyBwZXIgZWEuIEFuaW1hbCB0aWJpcXVlIHRyYWN0YXRvcyB1dCBlc3QsIGFkIHBlciBtb2RvIHNjcmlwdGEgaXJhY3VuZGlhPzxicj5UZSBwcmkgZmFzdGlkaWkgdGhlb3BocmFzdHVzLCBuaXNsIG9tbmlzIGNldGVybyBoYXMgYWQuIFZpZGUgc3VzY2lwaWFudHVyIGN1IHF1bywgZXggbWVhIHNvbGVhdCBwZXJpY3VsaXMgdG9ycXVhdG9zLiBWaW0gcG9ycm8gcGxhdG9uZW0gZGV0ZXJydWlzc2V0IGN1PyBEZWxlbml0IHNwbGVuZGlkZSBmb3JlbnNpYnVzIHBybyBuby4gSW4gZGViZXQgc29sdXRhIG5hbSwgZXVtIGNpdmlidXMgZXhwZXRlbmRpcyBldD8nKTtcbmNvbnN0IGxvY2F0aW9uID0gbmV3IENhcmQoJ0xvY2F0aW9uJywnNDE5MCBEdWtlIFN0cmVldCw8YnI+TW9udHJlYWwgSDNDIDVLNCcsJzxzcGFuIGlkPVwibGlua1wiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPm9wZW5faW5fbmV3PC9zcGFuPiBGYWtlIGdvb2dsZSBtYXBzIGxpbmsnKTtcbmNvbnN0IGhvdXJzID0gbmV3IENhcmQoJ0hvdXJzJywnTW9uZGF5LUZyaWRheTo8YnI+MTFhbS0xMmFtPGJyPjxicj5XZWVrZW5kOjxicj4xMWFtLTExcG0nKTtcblxuY29uc3QgY2FyZHMgPSBbXTtcblxuY2FyZHMucHVzaChhYm91dCk7XG5jYXJkcy5wdXNoKGxvY2F0aW9uKTtcbmNhcmRzLnB1c2goaG91cnMpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWVudSgpe1xuICAgIGNvbnN0IG1haW4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaWQgPSAnbWVudS1wYWdlJztcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VjdGlvbicpO1xuXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgcHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcbiAgICAgICAgc2VjdGlvbi5pbm5lckhUTUwgPSBpdGVtLmluZ3JlZGllbnRzO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuY2xhc3MgTWVudUl0ZW17XG4gICAgY29uc3RydWN0b3IobmFtZSxwcmljZSxpbmdyZWRpZW50cyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICAgIH1cbn1cblxuY29uc3QgbWVudUl0ZW1zID0gW107XG5cbmNvbnN0IGl0ZW0xID0gbmV3IE1lbnVJdGVtKCdDaGlja2VuIEJ1bGdvZ2knLCcxMiQnLCdvbmlvbiwgZ2FybGljLCBzZXNhbWUgb2lsLCBjYXllbm5lLCBjaGlja2VuIGJyZWFzdCwgc295IHNhdWNlJyk7XG5jb25zdCBpdGVtMiA9IG5ldyBNZW51SXRlbSgnU3BpY3kgQ2F1bGlmbG93ZXInLCcxMCQnLCdjYXVsaWZsb3dlcmV0dGVzLCBkaWNlZCBwZXBwZXIsIG9uaW9uLCBob3Qgc2F1Y2UnKTtcbmNvbnN0IGl0ZW0zID0gbmV3IE1lbnVJdGVtKCdDaGlsbGkgVG9mdScsJzEwJCcsJ3RvZnUgY3ViZXMsIHBlcHBlciwgb25pb25zLCBjaGlsbGksIGdhcmxpYyBncmF2eScpO1xuY29uc3QgaXRlbTQgPSBuZXcgTWVudUl0ZW0oJ1Njb25lcycsJzUkJywnY2xvdHRlZCBjcmVhbSwgbGVtb24gY3VyZCwgc3RyYXdiZXJyeSBqYW0nKTtcbmNvbnN0IGl0ZW01ID0gbmV3IE1lbnVJdGVtKCdNYW5nbyBDaHV0bmV5JywnNCQnLCdzd2VldCBhbmQgc291ciBjaHV0bmV5IHdpdGggc3BpY2VzJyk7XG5jb25zdCBpdGVtNiA9IG5ldyBNZW51SXRlbSgnSG9tbW9zJywnNyQnLCdjaGlja3BlYSBwdXJlZSwgc2VzYW1lIHBhc3RlLCBsZW1vbicpO1xuXG5tZW51SXRlbXMucHVzaChpdGVtMSxpdGVtMixpdGVtMyxpdGVtNCxpdGVtNSxpdGVtNik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJpbnRIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCBwcmludE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgZGlzcGxheUhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGNvbnN0IGxpbmtzID1bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gbGluaztcbiAgICAgICAgbGkuaWQgPSBsaW5rLnRvTG93ZXJDYXNlKCkgKyAnQnRuJztcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckRpc3BsYXkpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KVxuXG4gICAgbWVudS5pZCA9ICdtZW51JztcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gXCJtZW51XCI7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgICB9KVxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn0pKCk7XG5cbmNvbnN0IGRpc3BsYXlQYWdlID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRIb21lKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRNZW51KTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5yZW1vdmUoKTtcbn1cblxuLy9wcmludEhvbWUoKTtcbnByaW50TWVudSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=