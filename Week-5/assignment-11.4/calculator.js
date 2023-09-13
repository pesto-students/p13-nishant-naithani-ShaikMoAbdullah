function updateScore() {
  const radioButtons = document.querySelectorAll("input[type='radio']");
  for (const button of radioButtons) {
    button.addEventListener("click", function (event) {
      const warningSign = document.getElementById("warning");
      warningSign.style.display = "none";
      const score = document.getElementById("score");
      const min = 0;
      const max = 10;
      const randomNumber = (Math.random() * (max - min + 1) + min).toFixed(1);

      score.textContent = randomNumber;
    });
  }
}

updateScore();
