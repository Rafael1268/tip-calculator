import './style.css';

const billInput = document.querySelector('#billInput')
const tipBtns = document.querySelectorAll('button.tipBtn');
const tipInput = document.querySelector('#tipInput');
const peopleInput = document.querySelector('#peopleInput');
const resetBtn = document.querySelector('#resetBtn');

let currentTip = 5;

billInput.addEventListener('keydown', () => checkNumber(event));
billInput.addEventListener('input', () => checkEmpty());
tipBtns.forEach(tipBtn => tipBtn.addEventListener('click', () => tipPercentage(event)));
tipInput.addEventListener('keydown', () => checkNumber(event));
tipInput.addEventListener('input',  () => tipPercentage(event));
peopleInput.addEventListener('keydown', () => checkNumber(event));
peopleInput.addEventListener('input', () => checkEmpty());
resetBtn.addEventListener('click', () => reset());

checkEmpty();

function checkNumber(e) {
  if (e.key === 'Backspace') {
    return;
  } else if (isNaN(e.key)) {
    e.preventDefault();
  };
}

function checkEmpty() {
  const tipPerson = document.querySelector('#tipPerson');
  const totalPerson = document.querySelector('#totalPerson');
  const billError = document.querySelector('#billError');
  const peopleError = document.querySelector('#peopleError');
  if (billInput.value === '') {
    tipPerson.innerText = '$0.00';
    totalPerson.innerText = '$0.00';
    if (peopleInput.value === '') {
      tipPerson.innerText = '$0.00';
      totalPerson.innerText = '$0.00';
      peopleError.innerText = 'Field cannot be empty';
      return billError.innerText = 'Field cannot be empty';
    };
    peopleError.innerText = '';
    return billError.innerText = 'Field cannot be empty';
  };
  if (peopleInput.value === '') {
    tipPerson.innerText = '$0.00';
    totalPerson.innerText = '$0.00';
    billError.innerText = '';
    return peopleError.innerText = 'Field cannot be empty';
  };
  billError.innerText = '';
  peopleError.innerText = '';
  calculate();
}

function calculate() {
  const tip = calculateTip();
  const total = calculateTotal();
  const tipPerson = document.querySelector('#tipPerson');
  const totalPerson = document.querySelector('#totalPerson');
  tipPerson.innerText = `$${tip}`;
  totalPerson.innerText = `$${total}`;
};

function calculateTip() {
  const total = billInput.value * (currentTip / 100);
  const personTotal = total / peopleInput.value;
  const rounded = Math.round(personTotal * 100) / 100;
  return rounded;
};

function calculateTotal() {
  const total = Number(billInput.value) + (billInput.value * (currentTip / 100));
  const personTotal = total / peopleInput.value;
  const rounded = Math.round(personTotal * 100) / 100;
  return rounded;
};

function reset() {
  billInput.value = '';
  tipInput.value = '';
  peopleInput.value = '';
  checkEmpty();
};

function tipPercentage(e) {
  if (e.target.nodeName === 'INPUT') {
    tipBtns.forEach(tipBtn => tipBtn.classList.remove('selectedBtn'));
    currentTip = Number(tipInput.value);
  } else {
    tipBtns.forEach(tipBtn => tipBtn.classList.remove('selectedBtn'));
    e.target.classList.add('selectedBtn');
    currentTip = Number(e.target.id);
  };
  checkEmpty();
};