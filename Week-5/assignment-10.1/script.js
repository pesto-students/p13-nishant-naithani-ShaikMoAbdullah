const arrOfStrings = ["hello", "world", "test"];

function* symbolGenerator(arrOfStrings) {
  for (const iterator of arrOfStrings) {
    yield Symbol(iterator);
  }
}

const iterator = symbolGenerator(arrOfStrings);

for (const element of iterator) {
  console.log(element);
}
