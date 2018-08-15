document.addEventListener("DOMContentLoaded", event => {
  let changeMe = document.querySelector('#change-me');
  let changeButton = document.querySelector('#click-me')
  changeButton.addEventListener('click', event => {
    changeMe.style.color = 'blue'
  })
});
