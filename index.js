const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtn.addEventListener('click', onBtnStartClick);
stopBtn.addEventListener('click', onBtnStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let chaneColorIndex = null;

const changeColor = () => {
    const currentColor = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = `${colors[currentColor]}`;
    startBtn.setAttribute('disabled', true);
};

function onBtnStartClick() {
   chaneColorIndex = setInterval(changeColor, 1000);
};

function onBtnStopClick() {
    clearInterval(chaneColorIndex);
    startBtn.removeAttribute('disabled', false);
};