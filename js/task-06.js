const input = document.getElementById('validation-input');
const length = input.getAttribute('data-length');

// console.log(length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  // console.log(input.value.length);
  // console.log(event.currentTarget.value.length);

  if (input.value.length == length) {
    // console.log('верно 6');
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  }
  // console.log('не верно, не 6');
  input.classList.remove('valid');
  input.classList.add('invalid');
}
