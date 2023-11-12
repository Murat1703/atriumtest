// получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.gallery-tab-item');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.tabs__item._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.gallery-tab-item._active');
    
    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }
    
    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
})


// получаем все кнопки навигации
const TourtabsButtons = document.querySelectorAll('.virtual-t-btn');

// Проходимся по всем кнопкам
TourtabsButtons.forEach(tourbtn => {
  // вешаем на каждую кнопку обработчик события клик
  tourbtn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.virtual-content._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.virtual-t-btn._active');
    
    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }
    
    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${tourbtn.getAttribute('data-id')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    // добавляем класс _active кнопке на которую нажали
    tourbtn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
})
