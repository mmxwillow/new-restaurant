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

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNuRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxvREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICAgICA8bWFpbiBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QWJvdXQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcm8gbmUgZmVycmkgZGljYW50IGVmZmljaWFudHVyLCBzb2x1dGEgcXVhZXN0aW8gcGVyIGVhLiBBbmltYWwgdGliaXF1ZSB0cmFjdGF0b3MgdXQgZXN0LCBhZCBwZXIgbW9kbyBzY3JpcHRhIGlyYWN1bmRpYT88YnI+VGUgcHJpIGZhc3RpZGlpIHRoZW9waHJhc3R1cywgbmlzbCBvbW5pcyBjZXRlcm8gaGFzIGFkLiBWaWRlIHN1c2NpcGlhbnR1ciBjdSBxdW8sIGV4IG1lYSBzb2xlYXQgcGVyaWN1bGlzIHRvcnF1YXRvcy4gVmltIHBvcnJvIHBsYXRvbmVtIGRldGVycnVpc3NldCBjdT8gRGVsZW5pdCBzcGxlbmRpZGUgZm9yZW5zaWJ1cyBwcm8gbm8uIEluIGRlYmV0IHNvbHV0YSBuYW0sIGV1bSBjaXZpYnVzIGV4cGV0ZW5kaXMgZXQ/PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+TG9jYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPjQxOTAgRHVrZSBTdHJlZXQsPGJyPk1vbnRyZWFsIEgzQyA1SzQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuIGlkPVwibGlua1wiIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICBvcGVuX2luX25ld1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IEZha2UgZ29vZ2xlIG1hcHMgbGluazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5Ib3VyczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+TW9uZGF5LUZyaWRheTo8YnI+MTFhbS0xMmFtPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgV2Vla2VuZDo8YnI+MTFhbS0xMXBtPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRIb21lKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlkID0gJ2hvbWUnO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcblxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBjYXJkLnRpdGxlO1xuICAgICAgICBzZWN0aW9uLmlubmVySFRNTCA9IGNhcmQuc2VjdGlvbjtcblxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcblxuICAgICAgICBpZihjYXJkLmxpbmspe1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuaW5uZXJIVE1MID0gY2FyZC5saW5rO1xuICAgICAgICAgICAgbGluay5ocmVmID0gXCIjXCI7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmNsYXNzIENhcmR7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHNlY3Rpb24sIGxpbmspe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgIHRoaXMubGluayA9IGxpbms7XG4gICAgfVxufVxuXG5jb25zdCBhYm91dCA9IG5ldyBDYXJkKCdBYm91dCcsJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBwcm8gbmUgZmVycmkgZGljYW50IGVmZmljaWFudHVyLCBzb2x1dGEgcXVhZXN0aW8gcGVyIGVhLiBBbmltYWwgdGliaXF1ZSB0cmFjdGF0b3MgdXQgZXN0LCBhZCBwZXIgbW9kbyBzY3JpcHRhIGlyYWN1bmRpYT88YnI+VGUgcHJpIGZhc3RpZGlpIHRoZW9waHJhc3R1cywgbmlzbCBvbW5pcyBjZXRlcm8gaGFzIGFkLiBWaWRlIHN1c2NpcGlhbnR1ciBjdSBxdW8sIGV4IG1lYSBzb2xlYXQgcGVyaWN1bGlzIHRvcnF1YXRvcy4gVmltIHBvcnJvIHBsYXRvbmVtIGRldGVycnVpc3NldCBjdT8gRGVsZW5pdCBzcGxlbmRpZGUgZm9yZW5zaWJ1cyBwcm8gbm8uIEluIGRlYmV0IHNvbHV0YSBuYW0sIGV1bSBjaXZpYnVzIGV4cGV0ZW5kaXMgZXQ/Jyk7XG5jb25zdCBsb2NhdGlvbiA9IG5ldyBDYXJkKCdMb2NhdGlvbicsJzQxOTAgRHVrZSBTdHJlZXQsPGJyPk1vbnRyZWFsIEgzQyA1SzQnLCc8c3BhbiBpZD1cImxpbmtcIiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5vcGVuX2luX25ldzwvc3Bhbj4gRmFrZSBnb29nbGUgbWFwcyBsaW5rJyk7XG5jb25zdCBob3VycyA9IG5ldyBDYXJkKCdIb3VycycsJ01vbmRheS1GcmlkYXk6PGJyPjExYW0tMTJhbTxicj48YnI+V2Vla2VuZDo8YnI+MTFhbS0xMXBtJyk7XG5cbmNvbnN0IGNhcmRzID0gW107XG5cbmNhcmRzLnB1c2goYWJvdXQpO1xuY2FyZHMucHVzaChsb2NhdGlvbik7XG5jYXJkcy5wdXNoKGhvdXJzKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NZW51PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJtZW51XCIgY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgbWVudVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG4qL1xuaW1wb3J0IHByaW50SG9tZSBmcm9tICcuL2hvbWUuanMnXG5cbmNvbnN0IGRpc3BsYXlIZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBjb25zdCBsaW5rcyA9WydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xuXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IGxpbms7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG5cbiAgICBtZW51LmlkID0gJ21lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgbWVudS5pbm5lckhUTUwgPSBcIm1lbnVcIjtcblxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICAgIH0pXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufSkoKTtcblxucHJpbnRIb21lKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==