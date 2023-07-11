let intervalTimer: NodeJS.Timeout | null = null;
function timerFormat(time: number) {
  const minutes: string = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds: string = (time % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}
function renderTimer(
  startTime: number,
  elapsedTime: number,
  element: HTMLElement
) {
  const currentTime = Math.floor((Date.now() - startTime) / 1000);
  elapsedTime = currentTime;
  if (element !== null) {
    element.textContent = timerFormat(elapsedTime);
  }
}

export function startTimer(
  startTime: number,
  elapsedTime: number,
  element: HTMLElement
) {
  startTime = Date.now();
  renderTimer(startTime, elapsedTime, element);
  intervalTimer = setInterval(function () {
    renderTimer(startTime, elapsedTime, element);
  }, 1000);
}
export function stopTimer() {
  if (intervalTimer) {
    clearInterval(intervalTimer);
  }
}
