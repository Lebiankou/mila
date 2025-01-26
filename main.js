/* управлнение*/

let btn = document.getElementById('control');
let menu = document.getElementById('control_options');

btn.addEventListener('mouseover', (e) => {
    menu.classList.toggle('nonactive');
});
btn.addEventListener('mouseout', (e) => {
    menu.classList.add('nonactive'); 
});


document.addEventListener('DOMContentLoaded', (e) => {

  const sort_btn = document.getElementById('sort_dropdown_toggle');
  const sort_dropdown = document.getElementById('sort_selecrtor');
  const sort_options = document.querySelectorAll('.sort_dropdown_item');
  const btn_name = document.getElementById('sort_btn_name');
  
  /*открыть/закрыть селектор при клике на кпоку */
  
  sort_btn.addEventListener('click', (e) => {
    sort_dropdown.classList.toggle("open");
  });
  
  /*закрыть селектор при клике вне его*/
  
  document.addEventListener("click", (e) => {
    if (!sort_dropdown.contains(e.target) && !sort_btn.contains(e.target)) {
      sort_dropdown.classList.remove("open");
    }
  });
  
  
    // Обработка клика по пунктам меню
    sort_options.forEach(item => {
      item.addEventListener("click", (e) => {
        // Убираем активный класс у всех пунктов
        sort_options.forEach(i => i.classList.remove("active"));
        
        // Добавляем активный класс выбранному пункту
        item.classList.add("active");
  
        // Изменяем текст кнопки на выбранный пункт
        btn_name.textContent = item.textContent;
  
        // Закрываем меню
        sort_dropdown.classList.remove("open");
  
        // Логика сортировки (пример для обработки)
        const sortType = item.dataset.sort;
        console.log(`Выбрана сортировка: ${sortType}`);
        // Здесь вы можете вызвать функцию для сортировки элементов на странице
      });
    });
  
  console.log(sort_options);
  });
  