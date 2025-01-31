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

//глазок пароля логина

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

//глазок пароля signuo

const signup_password_eye = document.getElementById('signup_password_eye');
const signup_password = document.getElementById('signup_password');

signup_password_eye.addEventListener('click', () => {
   
  if (signup_password.type === 'password') {
    signup_password.type = 'text';
  } else {
    signup_password.type = 'password';
  }

  signup_password_eye.classList.toggle('view');
});

// глазок повтора пароля 

const signup_confirm_password_eye = document.getElementById('signup_confirm_password_eye');
const signup_confirm_password = document.getElementById('signup_confirm_password');

signup_confirm_password_eye.addEventListener('click', () => {
   
  if (signup_confirm_password.type === 'password') {
    signup_confirm_password.type = 'text';
  } else {
    signup_confirm_password.type = 'password';
  }

  signup_confirm_password_eye.classList.toggle('view');
});





// форма логина

// Получаем элементы формы
const loginEmail = document.getElementById('login_email');
const loginPassword = document.getElementById('login_password');
const submitButton = document.getElementById('login_submit');
const wrongLogin = document.getElementById('wrong_login');
const wrongPasswd = document.getElementById('wrong_passwd');

// Функция для проверки email
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Функция для проверки пароля (длина не менее 6 символов и без кавычек)
function validatePassword(password) {
    if (password.length < 6) return false;  // Длина не менее 6 символов
    if (/['"]/.test(password)) return false; // Проверка на кавычки
    return true;
}

// Функция для активации/деактивации кнопки "Log In"
function toggleSubmitButton() {
    if (validateEmail(loginEmail.value) && validatePassword(loginPassword.value)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Валидация email при завершении ввода
loginEmail.addEventListener('blur', function() {
    if (!validateEmail(loginEmail.value)) {
        wrongLogin.textContent = "Please enter a valid email address.";
        wrongLogin.style.color = 'red';
    } else {
        wrongLogin.textContent = '';
    }
    toggleSubmitButton();
});

// Валидация пароля при завершении ввода
loginPassword.addEventListener('blur', function() {
    if (!validatePassword(loginPassword.value)) {
        wrongPasswd.textContent = "Password must be at least 6 characters.";
        wrongPasswd.style.color = 'red';
    } else {
        wrongPasswd.textContent = '';
    }
    toggleSubmitButton();
});

// Функция для отправки данных на сервер
async function submitForm(event) {
    event.preventDefault(); // Предотвратить обычную отправку формы

    // Скрыть ошибки перед отправкой
    wrongLogin.textContent = '';
    wrongPasswd.textContent = '';

    // Собираем данные формы
    const formData = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    try {
        // Отправляем данные на сервер с помощью fetch
        const response = await fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        // Если сервер вернул успешный ответ
        if (response.ok) {
            const data = await response.json();
            alert('Login successful!');
            // Перенаправление после успешной авторизации
            // window.location.href = '/dashboard';
        } else {
            // Если ошибка, получаем данные ошибки от сервера
            const errorData = await response.json();
            if (errorData.detail) {
                // Обработка ошибки (например, неверный email или пароль)
                wrongPasswd.textContent = errorData.detail || "Invalid email or password.";
                wrongPasswd.style.color = 'red';
            } else {
                // Обработка других ошибок
                wrongLogin.textContent = errorData.message || "An unexpected error occurred.";
                wrongLogin.style.color = 'red';
            }
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Привязываем обработчик события к кнопке отправки
document.getElementById('login-form').addEventListener('submit', submitForm);




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('signu_email');
    const passwordInput = document.getElementById('signup_password');
    const confirmPasswordInput = document.getElementById('signup_confirm_password');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const submitButton = form.querySelector('.submit_btn');

    // Элементы для отображения ошибок
    const emailError = document.getElementById('reg_email_error');
    const passwordError = document.getElementById('reg_pass_error');
    const confirmPasswordError = document.getElementById('reg_comfirm_passwd_error');
    const checkboxError = document.getElementById('checkbpx_error');

    // Стили для ошибок
    const errorStyle = 'color: red; font-size: 12px;';

    // Функция для проверки email
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    // Функция для проверки длины пароля
    const validatePasswordLength = (password) => password.length >= 6;

    // Функция для проверки кавычек в пароле
    const validatePasswordQuotes = (password) => !/['"]/.test(password);

    // Функция для проверки состояния формы
    const validateForm = () => {
        const isEmailValid = validateEmail(emailInput.value);
        const isPasswordLengthValid = validatePasswordLength(passwordInput.value);
        const isPasswordQuotesValid = validatePasswordQuotes(passwordInput.value);
        const doPasswordsMatch = passwordInput.value === confirmPasswordInput.value;
        const isCheckboxChecked = checkbox.checked;

        // Включение/выключение кнопки
        submitButton.disabled = !(
            isEmailValid &&
            isPasswordLengthValid &&
            isPasswordQuotesValid &&
            doPasswordsMatch &&
            isCheckboxChecked
        );
    };

    // Валидация email при завершении ввода
    emailInput.addEventListener('blur', () => {
        emailError.textContent = validateEmail(emailInput.value)
            ? ''
            : 'Please enter a valid email address.';
        emailError.style = errorStyle;
    });

    // Валидация пароля при завершении ввода
    passwordInput.addEventListener('blur', () => {
        if (!validatePasswordLength(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 6 characters.';
        } else if (!validatePasswordQuotes(passwordInput.value)) {
            passwordError.textContent = 'Password must not contain single or double quotes.';
        } else {
            passwordError.textContent = '';
        }
        passwordError.style = errorStyle;
    });

    // Валидация подтверждения пароля при завершении ввода
    confirmPasswordInput.addEventListener('blur', () => {
        confirmPasswordError.textContent =
            passwordInput.value === confirmPasswordInput.value
                ? ''
                : 'Passwords do not match.';
        confirmPasswordError.style = errorStyle;
    });

    // Валидация чекбокса
    checkbox.addEventListener('change', () => {
        checkboxError.textContent = checkbox.checked ? '' : 'You must agree to the terms.';
        checkboxError.style = errorStyle;
    });

    // Валидация формы при изменении полей
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
    checkbox.addEventListener('change', validateForm);

    // Обработка отправки формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Проверка перед отправкой
        validateForm();
        if (submitButton.disabled) {
            return;
        }

        // Данные для отправки
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert('Registration successful!');
                // Перенаправление на другой URL (например, страницу входа)
                // window.location.href = '/login';
            } else {
                const errorData = await response.json();
                alert(errorData.detail || 'An unexpected error occurred.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    // Инициализация
    submitButton.disabled = true;
});