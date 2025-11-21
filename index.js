const topRight = document.getElementById('top-right')
const topLeft = document.getElementById('top-left')
const bottomRight = document.getElementById('bottom-right')
const bottomLeft = document.getElementById('botton-left')
const preview = document.getElementById('preview')

topRight.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderBottomRightRadius = `${value}px`
})