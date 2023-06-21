export function showGameOverScreen(timerElement:HTMLElement, text: string, classElement: string, gameOverlayElement: HTMLElement) {
   const gameOverScreen = document.createElement("div");
   gameOverScreen.className = classElement;
   gameOverScreen.innerHTML = ` <div class="game-over__win"></div>       
   <div class="game-over__title"> ${text}</div>
   <div class="game-over__time__title">Затраченное время:</div>
   <h1 class="game-over__time"> ${timerElement.textContent}</h1>
   <button class="game-over__btn restart-btn">Начать заново</button>`
  

   gameOverlayElement?.appendChild(gameOverScreen);
   gameOverlayElement?.classList.add("show");
} 
export function showGameLoseScreen(timerElement:HTMLElement, text: string, classElement: string, gameOverlayElement: HTMLElement) {
   const gameOverScreen = document.createElement("div");
   gameOverScreen.className = classElement;
   gameOverScreen.innerHTML = `
   <div class="game-over__lose"></div>       
   <div class="game-over__title"> ${text}</div>
   <div class="game-over__time__title">Затраченное время:</div>
   <h1 class="game-over__time"> ${timerElement.textContent}</h1>
   <button class="game-over__btn restart-btn">Начать заново</button>`
  

   gameOverlayElement?.appendChild(gameOverScreen);
   gameOverlayElement?.classList.add("show");
} 