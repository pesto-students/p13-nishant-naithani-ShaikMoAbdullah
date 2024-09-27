const arrayOfNumbers = [4, 2, 8, 1];

function divideArray(arrayOfNumbers) {
  let evenNumbers = arrayOfNumbers.filter((num) => num % 2 === 0).sort();
  evenNumbers = evenNumbers.length > 0 ? evenNumbers : "None";
  let oddNumbers = arrayOfNumbers.filter((num) => num % 2 !== 0).sort();
  oddNumbers = oddNumbers.length > 0 ? oddNumbers : "None";

  return [evenNumbers, oddNumbers];
}

const [evenNumbers, oddNumbers] = divideArray(arrayOfNumbers);

console.log(evenNumbers, oddNumbers);
