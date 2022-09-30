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

// Escreva seu código abaixo. 4, 11, 18 e 25 <ul id="days"> <li class="day">3</li>
function addDecember() {
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.querySelector('#days');
  console.log(days);
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
// classe "buttons-container"
function addHolidaysButton (){
  const btnContainer = document.querySelector('.buttons-container'); 
  const holidayBtn = document.createElement('button')
  holidayBtn.textContent = 'Feriados';
  holidayBtn.id = 'btn-holiday';
  btnContainer.appendChild(holidayBtn);

}

addHolidaysButton();