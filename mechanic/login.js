const regForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

const regButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");

function openRegForm() {
	regForm.style.display = "grid";
	loginForm.style.display = "none";
	regButton.style.color = "#eba966";
	loginButton.style.color = "gray";
}

function openLoginForm() {
	regForm.style.display = "none";
	loginForm.style.display = "grid";
	regButton.style.color = "gray";
	loginButton.style.color = "#eba966";
}

// Password Hide & Seek

const regPass = document.getElementById('registerPassword');
const regToggle = document.getElementById('seekRegisterPassword');

const loginPass = document.getElementById('loginPassword');
const loginToggle = document.getElementById('seekLoginPassword');

regToggle.addEventListener('click', () => {
	const isRegPassword = regPass.type === 'password';
	regPass.type = isRegPassword ? 'text' : 'password';
	regToggle.textContent = isRegPassword ? 'Hide' : 'Seek';
});

loginToggle.addEventListener('click', () => {
	const isLoginPassword = loginPass.type === 'password';
	loginPass.type = isLoginPassword ? 'text' : 'password';
	loginToggle.textContent = isLoginPassword ? 'Hide' : 'Seek';
});