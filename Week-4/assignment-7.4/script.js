const wordMap = new Map();
let count = 0;

function calcWordFrequencies() {
  const inputString = prompt();
  if (inputString !== null) {
    const seperatedStrings = inputString.split(" ");
    console.log(seperatedStrings);
    console.log(wordMap);
    for (const iterator of seperatedStrings) {
      if (wordMap.get(iterator)) {
        wordMap.set(iterator, ++count);
      } else {
        wordMap.set(iterator, count === 0 ? ++count : 1);
      }
    }
  }
}

calcWordFrequencies();
