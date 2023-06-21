import "/src/styles/style.css";
import { renderBoard } from "./game";
import { startTimer, stopTimer } from "./timer";
import { showGameOverScreen, showGameLoseScreen } from "./showGameScreen";
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

let selectedLevel: number = 0;
let cardClasses: string[] = [];
let openedCards: HTMLElement[] = [];
let elapsedTime: number = 0;
let startTime: number = 0;
const cardContainer = document.querySelector<HTMLElement>(".grid");

function handleLevelSelection() {
    const levelRadio = document.querySelectorAll<HTMLInputElement>(".level");

    for (let i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            selectedLevel = Number(levelRadio[i].value);

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

    renderBoard(cardClasses);
    setTimeout(() => {
        closeCards();
        let timerElement = document.querySelector(".timer") as HTMLElement;

        startTimer(startTime, elapsedTime, timerElement);
    }, 5000);

    cardContainer?.addEventListener("click", (event) => {
        const card = event.target as HTMLElement;
        if (
            card.classList.contains("card") &&
            !card.classList.contains("open")
        ) {
            openCard(card);
            checkMatch(startTime, elapsedTime);
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

const openCard = (card: HTMLElement) => {
    card.classList.remove("close");
    openedCards.push(card);
};
const checkMatch = (startTime: number, elapsedTime: number) => {
    if (openedCards.length === 2) {
        const [firstCard, secondCard] = openedCards;
        if (firstCard.dataset.suit === secondCard.dataset.suit) {
            setTimeout(() => {
                stopTimer();
               
            }, 400);
            const winTimerElement = document.getElementById(
                "timer"
            ) as HTMLElement;
            const gameOverlayElement = document.querySelector(".game-overlay") as HTMLElement
            showGameOverScreen(winTimerElement, "Вы выиграли!", "game-over-screen", gameOverlayElement  )
            const gameRestartButton = document.querySelector(".game-over__btn")
            gameRestartButton?.addEventListener("click", () => {
                window.location.assign("index.html");
                selectedLevel = 0;
            })
        } else {
            
            setTimeout(() => {
                stopTimer();
            }, 400);
                const loseTimerElement = document.getElementById(
                    "timer"
                ) as HTMLElement;
                const gameOverlayElement = document.querySelector(".game-overlay") as HTMLElement
                showGameLoseScreen(loseTimerElement, "Вы проиграли!", "game-over-screen", gameOverlayElement  )
                const gameRestartButton = document.querySelector(".game-over__btn")
                gameRestartButton?.addEventListener("click", () => {
                    window.location.assign("index.html");
                    selectedLevel = 0;
                })
        }
    }
};
