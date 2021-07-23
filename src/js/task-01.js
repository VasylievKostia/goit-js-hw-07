
console.log(`В списке ${categories.children.length} категории`)

const categoriesEl = document.querySelectorAll('h2')

const elements = categoriesEl.forEach(element =>
    console.log(`Категория: ${element.textContent}
    Количество элементов: ${element.parentNode.querySelectorAll('li').length}`)
    )
