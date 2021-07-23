const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients')
// console.log(ingredientsListRef)
const liElems = ingredients.map(ingredient => {
  const liEl = document.createElement('li')
  liEl.textContent = ingredient
  // console.log(ingredient)
  return liEl
}
  )
 ingredientsListRef.append(...liElems)
