const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');


loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('login_button_active');
    signupBtn.classList.remove('login_button_active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    signupForm.classList.add('nonactive')
    loginForm.classList.remove('nonactive');
});

signupBtn.addEventListener('click', () => {
    signupBtn.classList.add('login_button_active');
    loginBtn.classList.remove('login_button_active');
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('nonactive')
    loginForm.classList.add('nonactive');
});
