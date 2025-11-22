const topRight = document.getElementById('top-right')
const topLeft = document.getElementById('top-left')
const bottomRight = document.getElementById('bottom-right')
const bottomLeft = document.getElementById('bottom-left')

const preview = document.getElementById('preview')

const pTopRight = document.getElementById('ptop-right')
const pTopLeft = document.getElementById('ptop-left')
const pBottomRight = document.getElementById('pbottom-right')
const pBottomLeft = document.getElementById('pBottomLeft')

topRight.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderTopRightRadius = `${value}px`
    pTopRight.textContent = `border-top-right-radius: ${value} px;`
})

topLeft.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderTopLeftRadius = `${value}px`
    pTopLeft.textContent = `border-top-left-radius: ${value} px;`
})

bottomRight.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderBottomRightRadius = `${value}px`
    pBottomRight.textContent = `border-bottom-right-radius: ${value} px;`
})

bottomLeft.addEventListener('input', (inputValue) => {
    const value = inputValue.target.value
    preview.style.borderBottomLeftRadius = `${value}px`
    pTopRight.textContent = `border-bottom-left-radius: ${value} px;`
})