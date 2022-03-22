const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const tShirtCollar = document.getElementById("color1");
const tShirt = document.getElementById("color2");
const btn = document.querySelector(".button");
const question = document.querySelector(".question");

btn.addEventListener("click", function () {
  let colorNumber = "#";

  for (i = 0; i < 6; i++) {
    colorNumber += hex[getRandomNumber()];
    tShirt.style.fill = colorNumber;
    tShirtCollar.style.fill = colorNumber;
    question.style.color = colorNumber;
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
