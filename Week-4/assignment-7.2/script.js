function counter() {
  let count = 1;
  return function () {
    return count++;
  };
}

const firstCounter = counter();
const secondCounter = counter();
const firstValues = [];
const secondValues = [];

firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());
firstValues.push(firstCounter());

secondValues.push(secondCounter());
secondValues.push(secondCounter());
secondValues.push(secondCounter());

console.log(firstValues, secondValues);
