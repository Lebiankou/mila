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




// Получаем элементы формы
// const loginEmail = document.getElementById('login_email');
// const loginPassword = document.getElementById('login_password');
// const submitButton = document.getElementById('login_submit');
// const wrongLogin = document.getElementById('wrong_login');
// const wrongPasswd = document.getElementById('wrong_passwd');

// // Функция для проверки email
// function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// }

// // Функция для проверки пароля (например, длина не менее 6 символов)
// function validatePassword(password) {
//     return password.length >= 6;
// }

// // Функция для активации/деактивации кнопки "Log In"
// function toggleSubmitButton() {
//     if (validateEmail(loginEmail.value) && validatePassword(loginPassword.value)) {
//         submitButton.disabled = false;
//     } else {
//         submitButton.disabled = true;
//     }
// }

// // Валидация email при завершении ввода
// loginEmail.addEventListener('blur', function() {
//     if (!validateEmail(loginEmail.value)) {
//         wrongLogin.textContent = "Please enter a valid email address.";
//         wrongLogin.style.color = 'red';
//     } else {
//         wrongLogin.textContent = '';
//     }
//     toggleSubmitButton();
// });

// // Валидация пароля при завершении ввода
// loginPassword.addEventListener('blur', function() {
//     if (!validatePassword(loginPassword.value)) {
//         wrongPasswd.textContent = "Password must be at least 6 characters.";
//         wrongPasswd.style.color = 'red';
//     } else {
//         wrongPasswd.textContent = '';
//     }
//     toggleSubmitButton();
// });

// // Отключение кнопки отправки при нажатии
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form Submitted!');
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const loginForm = document.getElementById('login-form');
//   const emailInput = document.getElementById('login_email');
//   const passwordInput = document.getElementById('login_password');
//   const submitButton = document.getElementById('login_submit');
//   const wrongLogin = document.getElementById('wrong_login');
//   const wrongPassword = document.getElementById('wrong_passwd');
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   // Функция для проверки валидности email
//   function validateEmail() {
//       const email = emailInput.value;
//       if (!email.match(emailRegex)) {
//           wrongLogin.textContent = "Please enter a valid email address.";
//           return false;
//       }
//       wrongLogin.textContent = "";
//       return true;
//   }

//   // Функция для проверки пароля
//   function validatePassword() {
//       const password = passwordInput.value;
//       if (password.length < 6) { // Минимальная длина пароля
//           wrongPassword.textContent = "Password must be at least 6 characters.";
//           return false;
//       }
//       wrongPassword.textContent = "";
//       return true;
//   }

//   // Функция для активации/деактивации кнопки сабмита
//   function toggleSubmitButton() {
//       if (validateEmail() && validatePassword()) {
//           submitButton.disabled = false;
//       } else {
//           submitButton.disabled = true;
//       }
//   }

//   // Слушатели событий для email и пароля
//   emailInput.addEventListener('input', toggleSubmitButton);
//   passwordInput.addEventListener('input', toggleSubmitButton);

//   // Проверка email при потере фокуса
//   emailInput.addEventListener('blur', function() {
//       if (!validateEmail()) {
//           wrongLogin.style.display = "block"; // Показываем ошибку
//       } else {
//           wrongLogin.style.display = "none"; // Скрываем ошибку, если все правильно
//       }
//   });

//   // Проверка пароля при потере фокуса
//   passwordInput.addEventListener('blur', function() {
//       if (!validatePassword()) {
//           wrongPassword.style.display = "block"; // Показываем ошибку
//       } else {
//           wrongPassword.style.display = "none"; // Скрываем ошибку, если все правильно
//       }
//   });

//   // Обработчик сабмита формы
//   loginForm.addEventListener('submit', function (e) {
//       e.preventDefault(); // Останавливаем обычную отправку формы

//       if (!validateEmail() || !validatePassword()) {
//           return;
//       }

//       const email = emailInput.value;
//       const password = passwordInput.value;

//       // Подготовка данных для отправки на сервер
//       const data = {
//           email: email,
//           password: password
//       };

//       // Отправка данных на сервер (используем fetch)
//       fetch('/login', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(data)
//       })
//       .then(response => response.json())
//       .then(data => {
//           if (data.success) {
//               // Если сервер возвращает успех, можно перенаправить на другую страницу
//               window.location.href = '/dashboard'; // Пример редиректа
//           } else {
//               // Если ошибка в логине или пароле, показываем сообщения об ошибке
//               if (data.error === 'invalid_email') {
//                   wrongLogin.textContent = "Incorrect email address or password.";
//                   wrongLogin.style.display = "block"; // Показываем ошибку
//               }
//               if (data.error === 'invalid_password') {
//                   wrongPassword.textContent = "Incorrect email address or password.";
//                   wrongPassword.style.display = "block"; // Показываем ошибку
//               }
//           }
//       })
//       .catch(error => {
//           console.error('Error:', error);
//       });
//   });
// });