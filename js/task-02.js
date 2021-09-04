const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

const ingredientsToAdd = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  return listElement;
});

ingredientsList.append(...ingredientsToAdd);
