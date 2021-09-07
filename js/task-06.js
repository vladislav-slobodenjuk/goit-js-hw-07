const input = document.getElementById('validation-input');
const length = input.getAttribute('data-length');
const valid = 'valid';
const invalid = 'invalid';

// console.log(length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  // console.log(input.value.length);
  // console.log(event.currentTarget.value.length);

  if (input.value.length == length) {
    // console.log('верно 6');
    changeClass(valid, invalid);
    return;
  }
  // console.log('не верно, не 6');
  changeClass(invalid, valid);
}

function changeClass(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}
