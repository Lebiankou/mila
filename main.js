/* управлнение*/

let btn = document.getElementById('control');
let menu = document.getElementById('control_options');

btn.addEventListener('mouseover', () => {
    menu.classList.toggle('nonactive');
});
btn.addEventListener('mouseout', () => {
    menu.classList.add('nonactive'); 
});


  const sort_btn = document.getElementById('sort_dropdown_toggle');
  const sort_dropdown = document.getElementById('sort_selecrtor');
  const sort_options = document.querySelectorAll('.sort_dropdown_item');
  const btn_name = document.getElementById('sort_btn_name');
  
  /*открыть/закрыть селектор при клике на кпоку */
  
  sort_btn.addEventListener('click', () => {
    sort_dropdown.classList.toggle("open");
  });
  
  /*закрыть селектор при клике вне его*/
  
  document.addEventListener("click", () => {
    if (!sort_dropdown.contains(e.target) && !sort_btn.contains(e.target)) {
      sort_dropdown.classList.remove("open");
    }
  });
  
  
    // Обработка клика по пунктам меню
    sort_options.forEach(item => {
      item.addEventListener("click", () => {
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

  

    // смена блоков
    //блоки
const div_accounts = document.getElementById('div_accs');
const div_promo = document.getElementById('div_promo');
const div_groups = document.getElementById('div_groups');
const div_schedule = document.getElementById('div_schedule');
const div_proxy = document.getElementById('div_proxy');
const div_report = document.getElementById('div_report');
 



    //кнопки

    const btn_add_accounts = document.getElementById('btn_add_accounts');
    const btn_add_promo = document.getElementById('btn_add_promo');
    const btn_add_groups = document.getElementById('btn_add_groups');
    const btn_add_shredle = document.getElementById('btn_add_shredle');
    const btn_add_proxy = document.getElementById('btn_add_proxy');
    



    //кнопки смены блоков

    const  btn_accounts_div= document.getElementById('btn_accounts_div');
    const  btn_promo_div= document.getElementById('btn_promo_div');
    const  btn_groups_div= document.getElementById('btn_groups_div');
    const  btn_schedule_div= document.getElementById('btn_schedule_div');
    const  btn_proxy_div= document.getElementById('btn_proxy_div');
    const  btn_report_div= document.getElementById('btn_report_div');


    // Списки кнопок и блоков
const buttons = [btn_accounts_div, btn_promo_div, btn_groups_div, btn_schedule_div, btn_proxy_div, btn_report_div];
const blocks = [div_accounts, div_promo, div_groups, div_schedule, div_proxy, div_report];

// Функция для смены активного элемента
function setActive(button, block) {
  // Скрываем все блоки
  blocks.forEach(div => div.style.display = 'none');

  // Сбрасываем стили у всех кнопок
  buttons.forEach(btn => {
      btn.style.borderColor = ''; // Сбрасываем цвет границы
      btn.style.color = ''; // Сбрасываем цвет шрифта
  });

  // Показываем только выбранный блок
  block.style.display = 'block';

  // Меняем цвет границы и шрифта выбранной кнопки на чёрный
  button.style.borderColor = 'black';
  button.style.color = 'black';
}

// Привязка событий к кнопкам
btn_accounts_div.addEventListener('click', () => setActive(btn_accounts_div, div_accounts));
btn_promo_div.addEventListener('click', () => setActive(btn_promo_div, div_promo));
btn_groups_div.addEventListener('click', () => setActive(btn_groups_div, div_groups));
btn_schedule_div.addEventListener('click', () => setActive(btn_schedule_div, div_schedule));
btn_proxy_div.addEventListener('click', () => setActive(btn_proxy_div, div_proxy));
btn_report_div.addEventListener('click', () => setActive(btn_report_div, div_report));

