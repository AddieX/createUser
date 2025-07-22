document
  .getElementById("createUserForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    let valid = true;

    if (username.length < 3) {
      showError("username", "Username must be at least 3 characters.");
      valid = false;
    }

    if (!validateEmail(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }

    if (password.length < 6) {
      showError("password", "Password must be at least 6 characters.");
      valid = false;
    }

    if (password !== confirmPassword) {
      showError("confirmPassword", "Passwords do not match!");
      valid = false;
    }

    if (!valid) return;

    const form = document.getElementById("createUserForm");
    form.reset();
    showSuccess("Account created successfully!");
  });

function showError(fieldId, message) {
  const input = document.getElementById(fieldId);
  const error = document.createElement("div");
  error.className = "error-message";
  error.textContent = message;
  input.parentNode.appendChild(error);
}

function showSuccess(message) {
  const form = document.getElementById("createUserForm");
  const success = document.createElement("div");
  success.className = "success-message";
  success.textContent = message;
  form.parentNode.insertBefore(success, form.nextSibling);
  setTimeout(() => success.remove(), 3000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
