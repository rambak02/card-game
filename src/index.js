import "/src/styles/style.css";
import { renderBoard } from "./game.js";
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

    renderBoard(cardClasses);
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
