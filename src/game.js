const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
export const renderBoard = (cardClasses) => {
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
