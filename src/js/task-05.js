const inputRef = document.querySelector('#name-input')
const nameRef = document.querySelector('#name-output')

inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    event.currentTarget.value.trim() === '' ? nameRef.textContent = 'незнакомец' : nameRef.textContent = event.currentTarget.value
}


