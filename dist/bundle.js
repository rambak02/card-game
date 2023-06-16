/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBoard: () => (/* binding */ renderBoard)
/* harmony export */ });
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
const renderBoard = (cardClasses) => {
    const shuffledCard = shuffle(cardClasses);
    const cardContainer = document.querySelector(".grid");
    if (cardContainer !== null) {
        cardContainer.innerHTML = shuffledCard
            .map((card) => {
                const suit = card.split("-")[1];
                return `<div  class ="card ${card}" data-suit ="${suit}"></div>`;
            })
            .join("");
    }
};


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
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../src/styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


const cardClassesLv3 = [
    "a-spades",
    "k-spades",
    "q-spades",
    "j-spades",
    "ten-spades",
    "nine-spades",
    "eight-spades",
    "seven-spades",
    "six-spades",
    "a-hearts",
    "k-hearts",
    "q-hearts",
    "j-hearts",
    "ten-hearts",
    "nine-hearts",
    "eight-hearts",
    "seven-hearts",
    "six-hearts",
    "a-diamonds",
    "k-diamonds",
    "q-diamonds",
    "j-diamonds",
    "ten-diamonds",
    "nine-diamonds",
    "eight-diamonds",
    "seven-diamonds",
    "six-diamonds",
    "a-clubs",
    "k-clubs",
    "q-clubs",
    "j-clubs",
    "ten-clubs",
    "nine-clubs",
    "eight-clubs",
    "seven-clubs",
    "six-clubs",
];
const cardClassesLv2 = [
    "a-spades",
    "k-spades",
    "q-spades",
    "j-spades",
    "ten-spades",
    "nine-spades",
    "eight-spades",
    "seven-spades",
    "six-spades",
    "a-hearts",
    "k-hearts",
    "q-hearts",
    "j-hearts",
    "ten-hearts",
    "nine-hearts",
    "eight-hearts",
    "seven-hearts",
    "six-hearts",
    "a-diamonds",
    "k-diamonds",
    "q-diamonds",
    "j-diamonds",
    "ten-diamonds",
    "nine-diamonds",
    "eight-diamonds",
    "seven-diamonds",
    "six-diamonds",
    "a-clubs",
    "k-clubs",
    "q-clubs",
    "j-clubs",
    "ten-clubs",
    "nine-clubs",
    "eight-clubs",
    "seven-clubs",
    "six-clubs",
];
const cardClassesLv1 = [
    "a-spades",
    "k-spades",
    "q-spades",
    "j-spades",
    "ten-spades",
    "nine-spades",
    "eight-spades",
    "seven-spades",
    "six-spades",
    "a-hearts",
    "k-hearts",
    "q-hearts",
    "j-hearts",
    "ten-hearts",
    "nine-hearts",
    "eight-hearts",
    "seven-hearts",
    "six-hearts",
];

let selectedLevel = null;
let cardClasses = [];
let openedCards = [];
const cardContainer = document.querySelector(".grid");

function handleLevelSelection() {
    const levelRadio = document.querySelectorAll(".level");

    for (let i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            selectedLevel = parseInt(levelRadio[i].value);

            break;
        }
    }
}
const startButton = document.querySelector(".level__start-form");

startButton?.addEventListener("submit", () => {
    handleLevelSelection();

    if (selectedLevel !== null) {
        localStorage.setItem("selectedLevel", String(selectedLevel));

        window.location.assign("game-board.html");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    selectedLevel = localStorage.getItem("selectedLevel");

    if (selectedLevel == 1) {
        cardClasses = cardClassesLv1;
    }
    if (selectedLevel == 2) {
        cardClasses = cardClassesLv2;
    }
    if (selectedLevel == 3) {
        cardClasses = cardClassesLv3;
    }

    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(cardClasses);
    setTimeout(() => {
        closeCards();
    }, 5000);
    cardContainer?.addEventListener("click", (event) => {
        const card = event.target;
        if (
            card.classList.contains("card") &&
            !card.classList.contains("open")
        ) {
            openCard(card);
            checkMatch();
        }
    });
});

const closeCards = () => {
    let cardsElement = document.querySelectorAll(".card");
    cardsElement.forEach((card) => {
        card.classList.add("close");
    });

    openedCards = [];
};

const openCard = (card) => {
    card.classList.remove("close");
    openedCards.push(card);
};
const checkMatch = () => {
    if (openedCards.length === 2) {
        const [firstCard, secondCard] = openedCards;
        if (firstCard.dataset.suit === secondCard.dataset.suit) {
            setTimeout(() => {
                alert("Вы победили");
            }, 400);
        } else {
            setTimeout(() => {
                alert("Вы проиграли");
            }, 400);
        }
    }
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map