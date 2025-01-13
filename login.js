const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const underline_login = document.getElementById('underline_login');
const underline_signup = document.getElementById('underline_signup');


loginBtn.addEventListener('click', () => {
    /*кнопка логин (цвет и подчеркивание)*/
    loginBtn.classList.add('login_button_active');
    signupBtn.classList.remove('login_button_active');
    underline_login.classList.add('underline_login_btn')
    underline_signup.classList.remove('underline_signup_btn');

  /*формы*/
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    signupForm.classList.add('nonactive')
    loginForm.classList.remove('nonactive');
  
});

signupBtn.addEventListener('click', () => {
    /*кнопка регистрация (цвет и подчеркивание)*/
    signupBtn.classList.add('login_button_active');
    loginBtn.classList.remove('login_button_active');
    underline_login.classList.remove('underline_login_btn')
    underline_signup.classList.add('underline_signup_btn');

     /*формы*/
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('nonactive')
    loginForm.classList.add('nonactive');
    
});


const login_passwd_eye = document.getElementById('login_passwd_eye');
const login_password = document.getElementById('login_password');

login_passwd_eye.addEventListener('click', () => {
   
  if (login_password.type === 'password') {
    login_password.type = 'text';
  } else {
    login_password.type = 'password';
  }

    login_passwd_eye.classList.toggle('view');
});


