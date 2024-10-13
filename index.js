// Visualizzare in pagina 5 numeri casuali.

// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const displayEl = document.querySelector(".display");
console.log(displayEl);
const guessEl = document.querySelector(".guess_numbers");
console.log(guessEl);
const formEl = document.querySelector("form");
console.log(formEl);

const randNumbers = generateRandomNumbers(5);
console.log(randNumbers);

displayEl.innerHTML = randNumbers.join(",");

setTimeout(() => {
  displayEl.innerHTML = "";

  guessEl.classList.remove("d-none");
}, 1000);

let guess_numbers;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  guess_numbers = [
    Number(e.target.numb_1.value),
    Number(e.target.numb_2.value),
    Number(e.target.numb_3.value),
    Number(e.target.numb_4.value),
    Number(e.target.numb_5.value),
  ];

  console.log("numbers to guess", randNumbers);

  console.log("numbers guessed", guess_numbers);

  const guessedCorrectly = findScore(guess_numbers, randNumbers);
  console.log(guessedCorrectly, guessedCorrectly.length);

  printScore(displayEl, guessedCorrectly, guessEl);
});

function printScore(displayEl, guessedCorrectly, guessEl) {
  displayEl.innerHTML = `score:${
    guessedCorrectly.length
  } | You found: ${guessedCorrectly.join(",")}`;
  guessEl.classList.add("d-none");
}

function findScore(guess_numbers, randNumbers) {
  const guessedCorrectly = [];

  for (let index = 0; index < guess_numbers.length; index++) {
    const numb = guess_numbers[index];

    if (randNumbers.includes(numb)) {
      guessedCorrectly.push(numb);
    }
  }
  return guessedCorrectly;
}

function generateRandomNumbers(max) {
  const randNumbers = [];
  for (let i = 0; i < max; i++) {
    const numb = Math.ceil(Math.random() * 100);
    randNumbers.push(numb);
  }

  return randNumbers;
}
