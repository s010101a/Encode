const userInput = document.getElementById('input-number');

const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

let currentResult = 0;

function zbir(a, b) {
  return a + b;
}

function razlika(a, b) {
  return a - b;
}

function proizvod(a, b) {
  return a * b;
}

function kolicnik(a, b) {
  return a / b;
}

function uzmiUnosKorisnika() {
  return parseFloat(userInput.value);
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function add() {
  const broj = uzmiUnosKorisnika();
  const prethodni = currentResult;

  currentResult = zbir(currentResult, broj);

  outputResult(currentResult, `${prethodni} + ${broj}`);
}

function subtract() {
  const broj = uzmiUnosKorisnika();
  const prethodni = currentResult;

  currentResult = razlika(currentResult, broj);

  outputResult(currentResult, `${prethodni} - ${broj}`);
}

function multiply() {
  const broj = uzmiUnosKorisnika();
  const prethodni = currentResult;

  currentResult = proizvod(currentResult, broj);

  outputResult(currentResult, `${prethodni} * ${broj}`);
}

function divide() {
  const broj = uzmiUnosKorisnika();
  const prethodni = currentResult;

  if (broj === 0) {
    alert("Ne možeš dijeliti s nulom!");
    return;
  }

  currentResult = kolicnik(currentResult, broj);

  outputResult(currentResult, `${prethodni} / ${broj}`);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
