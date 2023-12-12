function drawTriangle(triangleSize) {
  let triangle = "";
  for (let lineIndex = 0; lineIndex < triangleSize; lineIndex++) {
    for (let startIndex = 0; startIndex <= lineIndex; startIndex++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  console.log(triangle);
}

drawTriangle(4);
