const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
export const renderBoard = (cardClasses: string[]) => {
    const shuffledCard = shuffle(cardClasses);
    const cardContainer = document.querySelector(".grid");
    if (cardContainer !== null) {
        cardContainer.innerHTML = shuffledCard
            .map((cardClass) => {
                const [rank, suit] = cardClass.split("-");
                return `<img src="../../../static/img/${cardClass}.png" data-value="${cardClass}" class ="card" data-suit ="${suit}">`;
            })
            .join("");
    }
};

export const generateCards = (rankArray: string[], suitArray: string[], numCards: number) => {
    const cards: string[] = [];
    let suitIndex: number = 0;
    let rankIndex: number = 0;
    for (let i = 0; cards.length < numCards; i++) {
        rankIndex = Math.floor(Math.random() * rankArray.length)
        suitIndex = Math.floor(Math.random() * suitArray.length)
        let card = `${rankArray[rankIndex]}-${suitArray[suitIndex]}`

        if (!cards.includes(card)) {
            cards.push(card)
        }
    }

    return cards
}