const refs = {
  rangeInput: document.getElementById('font-size-control'),
  outPut: document.getElementById('text'),
};

refs.outPut.style.fontSize = '16px';
console.log(refs.outPut.style.fontSize);

// console.log(refs.outPut.style.fontSize);

refs.rangeInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.target.style.fontSize);
  // console.log(refs.rangeInput.value);
  // console.log(refs.outPut.style.fontSize);
  refs.outPut.style.fontSize = `${refs.rangeInput.value}px`;
}
