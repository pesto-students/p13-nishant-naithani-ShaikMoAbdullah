function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numberOfGuesses = 0;
  let inputNumber = Number(prompt("Enter a number between 1 and 100."));
  numberOfGuesses++;
  if (inputNumber !== null) {
    while (inputNumber !== numToGuess && numberOfGuesses < totalGuesses) {
      if (inputNumber < numToGuess) {
        inputNumber = Number(
          prompt(`${inputNumber} is too small. Guess a larger number.`)
        );
        numberOfGuesses++;
      } else if (inputNumber > numToGuess) {
        inputNumber = Number(
          prompt(`${inputNumber} is too large. Guess a smaller number.`)
        );
        numberOfGuesses++;
      } else if (isNaN(inputNumber)) {
        inputNumber = Number(prompt("Please enter a number."));
      }
    }
    if (inputNumber === numToGuess && numberOfGuesses < totalGuesses) {
      return numberOfGuesses;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

console.log(playGuessingGame(7, 3));
