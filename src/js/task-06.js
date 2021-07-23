const indexRef = document.getElementById('validation-input')
// console.log(indexRef.dataset.length)

indexRef.addEventListener('input', indexCheck)

function indexCheck() {
    // console.log(this.value.length)
    if (this.dataset.length > this.value.length) {
        this.classList.remove('valid')
        this.classList.add('invalid')
    }
    else {
        this.classList.remove('invalid')
        this.classList.add('valid')
    }
}

