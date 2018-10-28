const login_URL = 'http://localhost:8000/users/login';
const form = document.querySelector('form');
const usernameField = document.querySelector('#username');
const passwordField = document.querySelector('#password');
const failureDiv = document.querySelector('#failure-message');

form.onsubmit = e => {
  e.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const body = JSON.stringify({ username, password });
  const headers = { 'Content-Type': 'application/json' };
  fetch(login_URL, { method: 'POST', body, headers })
    .then(json => json.json())
    .then(res => {
      if (res.error) {
        failureDiv.innerHTML = res.error;
        failureDiv.style.display = 'block';
      } else {
        localStorage.setItem('username', res.username);
        window.location.href = '/success.html';
      }
    });
};

const doShit = () => {
  // if jwt is created and sent back, store token in localStorage and change location to success page
  // otherwise post error message in index.html
}
