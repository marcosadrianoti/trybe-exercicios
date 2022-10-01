function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function addDecember() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  for (const dayNumber of decemberDaysList) {
    const dayNumberItem = document.createElement('li');
    dayNumberItem.innerText = dayNumber;
    dayNumberItem.classList.add('day');
    if (dayNumber == 24 || dayNumber == 25 || dayNumber == 31) {
      dayNumberItem.classList.add('holiday')
    }
    if (dayNumber == 4 || dayNumber == 11 || dayNumber == 18 || dayNumber == 25) {
      dayNumberItem.classList.add('friday');
    }

    days.appendChild(dayNumberItem);
  }
}

addDecember();

function addHolidaysButton() {
  const btnContainer = document.querySelector('.buttons-container');
  const holidayBtn = document.createElement('button')
  holidayBtn.textContent = 'Feriados';
  holidayBtn.id = 'btn-holiday';
  btnContainer.appendChild(holidayBtn);
}

addHolidaysButton();

holidayBtn = document.querySelector('#btn-holiday');
holidayBtn.addEventListener('click', coloringHolidays);
function coloringHolidays() {
  const listHolidays = document.querySelectorAll('.holiday');
  let colorHolidays = '';
  if (listHolidays[0].style.backgroundColor === 'rgb(180, 180, 180)'){
    colorHolidays ='rgb(238, 238, 238)';
  }else{
    colorHolidays ='rgb(180, 180, 180)';
  }
  for (const holiday of listHolidays) {
    holiday.style.backgroundColor = colorHolidays;
  }
}

function addFridayButton() {
  const btnContainer = document.querySelector('.buttons-container');
  const holidayBtn = document.createElement('button')
  holidayBtn.textContent = 'Sexta-feira';
  holidayBtn.id = 'btn-friday';
  btnContainer.appendChild(holidayBtn);
}

addFridayButton();