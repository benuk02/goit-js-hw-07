function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxDiv = document.querySelector("#boxes");
    const input = document.querySelector('input[type="number"]');
    
    let sizes = 30;

    createBtn.addEventListener("click", handleClick);
    destroyBtn.addEventListener("click", destroyBoxes);

    function handleClick() {
      const amount = Number(input.value);
      if (amount < 1 || amount > 100) {
        console.log("Error: Введіть число від 1 до 100");
        return;
      }

      createBoxes(amount);
      input.value = ''; 
    }

    function clear() {
      boxDiv.innerHTML = ""; 
      sizes = 30; 
    }

    function createBoxes(amount) {
      clear(); 

      for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.classList.add('box'); 
        box.style.width = `${sizes}px`;
        box.style.height = `${sizes}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxDiv.append(box);
        sizes += 10; 
      }
    }

    function destroyBoxes() {
      boxDiv.innerHTML = ''; 
      input.value = ''; 
      sizes = 30; 
    }