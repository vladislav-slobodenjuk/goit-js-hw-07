const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);
  if (event.currentTarget.value) {
    nameOutput.textContent = event.currentTarget.value;
    return;
  }
  nameOutput.textContent = 'незнакомец';
}
