const refs = {
  rangeInput: document.getElementById('font-size-control'),
  outPut: document.getElementById('text'),
};

refs.rangeInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.outPut.style.fontSize = `${refs.rangeInput.value}px`; // или `${event.target.valueAsNumber}px`
  // console.log(event);
}
