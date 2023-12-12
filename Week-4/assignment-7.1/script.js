class Calculator {
  add(number1, number2) {
    return number1 + number2;
  }
  subtract(number1, number2) {
    return number1 - number2;
  }
  multiply(number1, number2) {
    return number1 * number2;
  }
  divide(number1, number2) {
    try {
      if (number2 === 0) {
        throw new Error("Number 2 should not be 0");
      }
      return number1 / number2;
    } catch (error) {
      console.log(error);
    }
  }
}

class ScientificCalculator extends Calculator {
  square(number1) {
    return number1 * number1;
  }
  cube(number1) {
    return number1 * number1 * number1;
  }
  power(number1, number2) {
    return Math.pow(number1, number2);
  }
}

const calculate = new ScientificCalculator();
console.log(Calculator.prototype.add.call(calculate, 10, 5));
console.log(Calculator.prototype.subtract.apply(calculate, [10, 5]));

const multiplyByTwo = (number) => {
  return number * 2;
};

const multiplyByTwoFunction = multiplyByTwo.bind(calculate);
console.log(multiplyByTwoFunction(5));

const powerOfThree = (number) => {
  return Math.pow(number, 3);
};

const powerOfThreeFunc = powerOfThree.bind(calculate);
console.log(powerOfThreeFunc(2));
