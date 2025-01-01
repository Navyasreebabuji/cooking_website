/**const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

**/
// Select the elements
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu visibility
navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});



