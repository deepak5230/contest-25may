document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const successMessage = document.getElementById('success-message');
  
    function validateEmail(email) {
      return email.length >= 3 && email.includes('@') && email.includes('.');
    }
  
    function validatePassword(password) {
      return password.length >= 8;
    }
  
    function clearErrors() {
      emailError.textContent = '';
      passwordError.textContent = '';
    }
  
    document.getElementById('signup-form').addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value;
      const password = passwordInput.value;
  
      clearErrors();
  
      if (!validateEmail(email)) {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a';
      }
  
      if (!validatePassword(password)) {
        passwordError.textContent = 'Make sure password is more than 8 characters';
      }
  
      if (validateEmail(email) && validatePassword(password)) {
        const confirmation = confirm('Are you sure you want to sign up?');
        if (confirmation) {
          alert('Successful signup!');
          successMessage.textContent = 'Successful signup!';
          emailInput.value = '';
          passwordInput.value = '';
        }
      }
    });
  });