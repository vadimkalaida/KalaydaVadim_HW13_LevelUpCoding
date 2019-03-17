const usernameInput = document.querySelector('#username'),
      passwordInput = document.querySelector('#password');

passwordInput.addEventListener('input', function() {
  if(passwordInput.value.length < 6 || passwordInput.value.length > 16) {
    passwordInput.className = 'login-form-line-input2 error-text';
  } else {
    passwordInput.className = 'login-form-line-input2 good-text';
  }
});

usernameInput.addEventListener('input', function() {
  if(usernameInput.value.length < 6 || usernameInput.value.length > 16) {
    usernameInput.className = 'login-form-line-input1 error-text';
  } else {
    usernameInput.className = 'login-form-line-input1 good-text';
  }
});

var elements = document.querySelectorAll('input');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
  (function(element) {
    var id = element.getAttribute('id');
    element.value = sessionStorage.getItem(id); // обязательно наличие у элементов id
    element.oninput = function() {
      sessionStorage.setItem(id, element.value);
      checkValidity();
    };
  })(elements[i]);
}