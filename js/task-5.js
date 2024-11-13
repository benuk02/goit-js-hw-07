function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const buttonClick = document.querySelector(".change-color");
buttonClick.addEventListener("click", handleClick)
function handleClick(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor; 
  spanColor.textContent = randomColor;
}
console.log(spanColor)