let selectedLevel = null
function handleLevelSelection() {
    const levelRadio = document.querySelectorAll(".level")

    for (let i = 0; i < levelRadio.length; i++) {
        if (levelRadio[i].checked) {
            selectedLevel = levelRadio[i].value
            break
        }
    }
}
const startButton = document.querySelector(".level__start-form")
startButton.addEventListener("submit", () => {
    handleLevelSelection()

    if (selectedLevel !== null) {
        window.location.href = "game-board.html"
    }
})
