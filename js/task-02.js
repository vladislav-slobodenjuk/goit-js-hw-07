const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsList = document.querySelector('#ingredients');
// console.log(ingredientsList);

const ingredientsToAdd = ingredients.map(ingredient => {
    const ListElement = document.createElement('li');
    ListElement.textContent = ingredient;
    return ListElement;
});

ingredientsList.append(...ingredientsToAdd);
