function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', function () {
  // Wyłącza przycisk "Start" i włącza przycisk "Stop"
  startButton.disabled = true;
  stopButton.disabled = false;

  // Zmienia kolor tła
  intervalId = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', function () {
  // Włącza przycisk "Start" i wyłącza przycisk "Stop"
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
});
