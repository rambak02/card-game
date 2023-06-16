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

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBoard: () => (/* binding */ renderBoard)
/* harmony export */ });
var shuffle = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
var renderBoard = function (cardClasses) {
    var shuffledCard = shuffle(cardClasses);
    var cardContainer = document.querySelector(".grid");
    if (cardContainer !== null) {
        cardContainer.innerHTML = shuffledCard
            .map(function (card) {
            var suit = card.split("-")[1];
            return "<div  class =\"card ".concat(card, "\" data-suit =\"").concat(suit, "\"></div>");
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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../src/styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.ts");


var cardClassesLv3 = [
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
var cardClassesLv2 = [
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
var cardClassesLv1 = [
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
var selectedLevel = 0;
var cardClasses = [];
var openedCards = [];
var cardContainer = document.querySelector(".grid");
function handleLevelSelection() {
    var levelRadio = document.querySelectorAll(".level");
    for (var i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            selectedLevel = Number(levelRadio[i].value);
            break;
        }
    }
}
var startButton = document.querySelector(".level__start-form");
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("submit", function () {
    handleLevelSelection();
    if (selectedLevel !== null) {
        localStorage.setItem("selectedLevel", String(selectedLevel));
        window.location.assign("game-board.html");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    selectedLevel = Number(localStorage.getItem("selectedLevel"));
    if (selectedLevel == 1) {
        cardClasses = cardClassesLv1;
    }
    if (selectedLevel == 2) {
        cardClasses = cardClassesLv2;
    }
    if (selectedLevel == 3) {
        cardClasses = cardClassesLv3;
    }
    (0,_game__WEBPACK_IMPORTED_MODULE_1__.renderBoard)(cardClasses);
    setTimeout(function () {
        closeCards();
    }, 5000);
    cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.addEventListener("click", function (event) {
        var card = event.target;
        if (card.classList.contains("card") &&
            !card.classList.contains("open")) {
            openCard(card);
            checkMatch();
        }
    });
});
var closeCards = function () {
    var cardsElement = document.querySelectorAll(".card");
    cardsElement.forEach(function (card) {
        card.classList.add("close");
    });
    openedCards = [];
};
var openCard = function (card) {
    card.classList.remove("close");
    openedCards.push(card);
};
var checkMatch = function () {
    if (openedCards.length === 2) {
        var firstCard = openedCards[0], secondCard = openedCards[1];
        if (firstCard.dataset.suit === secondCard.dataset.suit) {
            setTimeout(function () {
                alert("Вы победили");
            }, 400);
        }
        else {
            setTimeout(function () {
                alert("Вы проиграли");
            }, 400);
        }
    }
};

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map