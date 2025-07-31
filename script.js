const passwordInput = document.getElementById('password');
const strengthMessage = document.getElementById('strengthMessage');
const togglePassword = document.getElementById('togglePassword');
const bar = document.getElementById('bar');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update strength message
    if (strength <= 2) {
        strengthMessage.textContent = "Weak";
        strengthMessage.style.color = "red";
        bar.style.backgroundColor = "red";
    } else if (strength === 3 || strength === 4) {
        strengthMessage.textContent = "Medium";
        strengthMessage.style.color = "orange";
        bar.style.backgroundColor = "orange";
    } else {
        strengthMessage.textContent = "Strong";
        strengthMessage.style.color = "green";
        bar.style.backgroundColor = "green";
    }

    bar.style.width = (strength / 5) * 100 + "%";
});

// Show/hide password
togglePassword.addEventListener('change', () => {
    passwordInput.type = togglePassword.checked ? 'text' : 'password';
});
