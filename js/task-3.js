const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
input.addEventListener("input", handleInput);
function handleInput(event) {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
}

