const categories = document.querySelectorAll('#categories .item');
// console.dir(categories);
console.log(`В списке ${categories.length} категории.`);

categories.forEach(topic =>
  console.log(
    `Категория: ${
      topic.querySelector('h2').textContent
    }, Количество элементов: ${topic.querySelectorAll('li').length}`,
  ),
);

// categories.forEach(topic => console.dir(topic.querySelectorAll('li')));
