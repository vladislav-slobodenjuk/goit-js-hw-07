const decrBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrBtn);
const incrBtn = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

let counterValue = 0;

const decrease = () => {
  if (counterValue > 0) {
    value.textContent = counterValue -= 1;
  }
};

const increase = () => {
  value.textContent = counterValue += 1;
};

decrBtn.addEventListener('click', decrease);
incrBtn.addEventListener('click', increase);
