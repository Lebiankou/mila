let btn = document.getElementById('control');
let menu = document.getElementById('control_options');

btn.addEventListener('click', () => {
    menu.classList.toggle('nonactive');
});
