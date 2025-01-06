// Объявляем примитивы
let isWeekend = Boolean;
let isHoliday = Boolean;

// Запрашиваем у пользователя, является ли сегодня выходным
const stringWeekend = 'no';
if (stringWeekend == 'yes') {
    isWeekend = true;
} else {
    isWeekend = false;
}

// Запрашиваем у пользователя, является ли сегодня праздничным днем
const stringHoliday = 'no';
if (stringHoliday == 'yes') {
    isHoliday = true;
} else {
    isHoliday = false;
}

// Проверяем условия и выводим соответствующее сообщение
if (isWeekend || isHoliday) {
  console.log('Сегодня выходной.');
}