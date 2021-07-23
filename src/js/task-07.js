const inputRef = document.getElementById('font-size-control')
const spanRef = document.getElementById('text')

console.log(inputRef)
console.log(spanRef)

inputRef.addEventListener('input', handleInputRange)

function handleInputRange(event) {
    spanRef.style.fontSize = event.currentTarget.value + 'px'
}