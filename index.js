const topRight = document.getElementById('top-right')
const topLeft = document.getElementById('top-left')
const bottomRight = document.getElementById('bottom-right')
const bottomLeft = document.getElementById('bottom-left')

const preview = document.getElementById('preview')



topRight.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderTopRightRadius = `${value}px`
})

topLeft.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderTopLeftRadius = `${value}px`
})

bottomRight.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderBottomRightRadius = `${value}px`
})

bottomLeft.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderBottomLeftRadius = `${value}px`
})