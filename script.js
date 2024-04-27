let navbar = document.querySelector('.header .flex .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () => {
        if (inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };
});
const registerForm = document.getElementById('register-form');
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      console.log("Name:", name);
      console.log("Email:", email);
    });
  });
  
  


   