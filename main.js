let selectedLevel = null;
function handleLevelSelection() {
  const levelRadio = document.getElementsByName("level");

  for (let i = 0; i < levelRadio.length; i++) {
    if (levelRadio[i].checked) {
      selectedLevel = levelRadio[i].value;
      break;
    }
  }
}
const startButton = document.querySelector(".level__start");
startButton.addEventListener("click", () => {
  handleLevelSelection();

  if (selectedLevel !== null) {
    console.log("страница уровная" + selectedLevel);
  }
});
