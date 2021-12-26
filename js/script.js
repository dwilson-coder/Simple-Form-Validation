const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// Sets default 'validity' settings to flse to force the function to run
let isValid = false;
let passwordsMatch = false;

// Functions
function validateForm() {
  // Using the Constraint API
  isValid = form.checkValidity();
  // Style message for the error
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  // Comparing Passwords
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // If form is valid and the passwords match
  if (isValid && passwordsMatch) {
    message.textContent = "Succesfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
} // Function ends

// Sore user data
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    // Passsword needs to be ecrypted before sending.
    password: form.password.value,
  };
  // Do something with user data (object)
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listeners
form.addEventListener("submit", processFormData);
