const btn = document.querySelector('.first-btn')
const secondBtn = document.querySelector('.second-btn')

const clickHandler = () => alert('Hello')

btn.addEventListener('click', clickHandler)
secondBtn.addEventListener('click', clickHandler)