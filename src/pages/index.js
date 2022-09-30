import './index.css'

const header = document.querySelector('.header')
const btn = document.querySelector('.button')
const btnChecker = document.querySelector('#check')

btn.addEventListener('click', () => {
  if (btnChecker.checked) {
    header.classList.add('header_active')
  } else {
    header.classList.remove('header_active')
  }
})
