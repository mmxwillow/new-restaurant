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
/*
        <header>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>
            <span id="menu" class="material-symbols-outlined">
                menu
                </span>
        </header>
*/



const displayHeader = (() => {
    const header = document.createElement('header');
    const list = document.createElement('ul');
    const menu = document.createElement('span');

    const links =['Home', 'Menu', 'Contact'];

    links.forEach((link) => {
        const li = document.createElement('li');
        li.innerHTML = link;
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

//printHome();
(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25FZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQzdDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQztBQUNDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0Esb0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICAgICA8bWFpbiBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcm8gbmUgZmVycmkgZGljYW50IGVmZmljaWFudHVyLCBzb2x1dGEgcXVhZXN0aW8gcGVyIGVhLiBBbmltYWwgdGliaXF1ZSB0cmFjdGF0b3MgdXQgZXN0LCBhZCBwZXIgbW9kbyBzY3JpcHRhIGlyYWN1bmRpYT88YnI+VGUgcHJpIGZhc3RpZGlpIHRoZW9waHJhc3R1cywgbmlzbCBvbW5pcyBjZXRlcm8gaGFzIGFkLiBWaWRlIHN1c2NpcGlhbnR1ciBjdSBxdW8sIGV4IG1lYSBzb2xlYXQgcGVyaWN1bGlzIHRvcnF1YXRvcy4gVmltIHBvcnJvIHBsYXRvbmVtIGRldGVycnVpc3NldCBjdT8gRGVsZW5pdCBzcGxlbmRpZGUgZm9yZW5zaWJ1cyBwcm8gbm8uIEluIGRlYmV0IHNvbHV0YSBuYW0sIGV1bSBjaXZpYnVzIGV4cGV0ZW5kaXMgZXQ/PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+TG9jYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPjQxOTAgRHVrZSBTdHJlZXQsPGJyPk1vbnRyZWFsIEgzQyA1SzQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGlkPVwibGlua1wiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICBvcGVuX2luX25ld1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IEZha2UgZ29vZ2xlIG1hcHMgbGluazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5Ib3VyczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+TW9uZGF5LUZyaWRheTo8YnI+MTFhbS0xMmFtPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgV2Vla2VuZDo8YnI+MTFhbS0xMXBtPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlkID0gJ2hvbWUnO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBjYXJkLnRpdGxlO1xuICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9IGNhcmQuc2VjdGlvbjtcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgICAgICBpZihjYXJkLmxpbmspe1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuaW5uZXJIVE1MID0gY2FyZC5saW5rO1xuICAgICAgICAgICAgbGluay5ocmVmID0gXCIjXCI7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmNsYXNzIENhcmR7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHNlY3Rpb24sIGxpbmspe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgfVxufVxuXG5jb25zdCBhYm91dCA9IG5ldyBDYXJkKCdBYm91dCcsJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcm8gbmUgZmVycmkgZGljYW50IGVmZmljaWFudHVyLCBzb2x1dGEgcXVhZXN0aW8gcGVyIGVhLiBBbmltYWwgdGliaXF1ZSB0cmFjdGF0b3MgdXQgZXN0LCBhZCBwZXIgbW9kbyBzY3JpcHRhIGlyYWN1bmRpYT88YnI+VGUgcHJpIGZhc3RpZGlpIHRoZW9waHJhc3R1cywgbmlzbCBvbW5pcyBjZXRlcm8gaGFzIGFkLiBWaWRlIHN1c2NpcGlhbnR1ciBjdSBxdW8sIGV4IG1lYSBzb2xlYXQgcGVyaWN1bGlzIHRvcnF1YXRvcy4gVmltIHBvcnJvIHBsYXRvbmVtIGRldGVycnVpc3NldCBjdT8gRGVsZW5pdCBzcGxlbmRpZGUgZm9yZW5zaWJ1cyBwcm8gbm8uIEluIGRlYmV0IHNvbHV0YSBuYW0sIGV1bSBjaXZpYnVzIGV4cGV0ZW5kaXMgZXQ/Jyk7XG5jb25zdCBsb2NhdGlvbiA9IG5ldyBDYXJkKCdMb2NhdGlvbicsJzQxOTAgRHVrZSBTdHJlZXQsPGJyPk1vbnRyZWFsIEgzQyA1SzQnLCc8c3BhbiBpZD1cImxpbmtcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5vcGVuX2luX25ldzwvc3Bhbj4gRmFrZSBnb29nbGUgbWFwcyBsaW5rJyk7XG5jb25zdCBob3VycyA9IG5ldyBDYXJkKCdIb3VycycsJ01vbmRheS1GcmlkYXk6PGJyPjExYW0tMTJhbTxicj48YnI+V2Vla2VuZDo8YnI+MTFhbS0xMXBtJyk7XG5cbmNvbnN0IGNhcmRzID0gW107XG5cbmNhcmRzLnB1c2goYWJvdXQpO1xuY2FyZHMucHVzaChsb2NhdGlvbik7XG5jYXJkcy5wdXNoKGhvdXJzKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lbnUoKXtcbiAgICBjb25zdCBtYWluICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlkID0gJ21lbnUtcGFnZSc7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBpdGVtLm5hbWU7XG4gICAgICAgIHByaWNlLmlubmVySFRNTCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIHNlY3Rpb24uaW5uZXJIVE1MID0gaXRlbS5pbmdyZWRpZW50cztcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmNsYXNzIE1lbnVJdGVte1xuICAgIGNvbnN0cnVjdG9yKG5hbWUscHJpY2UsaW5ncmVkaWVudHMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICB9XG59XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuXG5jb25zdCBpdGVtMSA9IG5ldyBNZW51SXRlbSgnQ2hpY2tlbiBCdWxnb2dpJywnMTIkJywnb25pb24sIGdhcmxpYywgc2VzYW1lIG9pbCwgY2F5ZW5uZSwgY2hpY2tlbiBicmVhc3QsIHNveSBzYXVjZScpO1xuY29uc3QgaXRlbTIgPSBuZXcgTWVudUl0ZW0oJ1NwaWN5IENhdWxpZmxvd2VyJywnMTAkJywnY2F1bGlmbG93ZXJldHRlcywgZGljZWQgcGVwcGVyLCBvbmlvbiwgaG90IHNhdWNlJyk7XG5jb25zdCBpdGVtMyA9IG5ldyBNZW51SXRlbSgnQ2hpbGxpIFRvZnUnLCcxMCQnLCd0b2Z1IGN1YmVzLCBwZXBwZXIsIG9uaW9ucywgY2hpbGxpLCBnYXJsaWMgZ3JhdnknKTtcbmNvbnN0IGl0ZW00ID0gbmV3IE1lbnVJdGVtKCdTY29uZXMnLCc1JCcsJ2Nsb3R0ZWQgY3JlYW0sIGxlbW9uIGN1cmQsIHN0cmF3YmVycnkgamFtJyk7XG5jb25zdCBpdGVtNSA9IG5ldyBNZW51SXRlbSgnTWFuZ28gQ2h1dG5leScsJzQkJywnc3dlZXQgYW5kIHNvdXIgY2h1dG5leSB3aXRoIHNwaWNlcycpO1xuY29uc3QgaXRlbTYgPSBuZXcgTWVudUl0ZW0oJ0hvbW1vcycsJzckJywnY2hpY2twZWEgcHVyZWUsIHNlc2FtZSBwYXN0ZSwgbGVtb24nKTtcblxubWVudUl0ZW1zLnB1c2goaXRlbTEsaXRlbTIsaXRlbTMsaXRlbTQsaXRlbTUsaXRlbTYpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1lbnU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3BhbiBpZD1cIm1lbnVcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgICBtZW51XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cbiovXG5pbXBvcnQgcHJpbnRIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCBwcmludE1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxuY29uc3QgZGlzcGxheUhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIGNvbnN0IGxpbmtzID1bJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gbGluaztcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSlcblxuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgICBtZW51LmlubmVySFRNTCA9IFwibWVudVwiO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG4gICAgfSlcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKGhlYWRlcik7XG59KSgpO1xuXG4vL3ByaW50SG9tZSgpO1xucHJpbnRNZW51KCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==