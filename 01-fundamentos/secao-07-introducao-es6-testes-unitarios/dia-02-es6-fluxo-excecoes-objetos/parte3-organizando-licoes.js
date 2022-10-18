const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => {
  obj[key] = value;
}
addTurno(lesson2, 'turno', 'noite');

const listingKeys = (obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key);
  }
}
listingKeys(lesson3);

const sizeObj = (obj) => {
  console.log(obj);
}
sizeObj(lesson3);

const listingValues = (obj) => {
  const values = Object.values(obj);
  for (const value of values) {
    console.log(value);
  }
}
listingValues(lesson3);

const creatingAllLessons = () => {
  const newLesson1 = {'lesson1': lesson1};
  const newLesson2 = {'lesson2': lesson2};
  const newLesson3 = {'lesson3': lesson3};
  const allLessons = Object.assign({}, newLesson1, newLesson2, newLesson3)
  return allLessons;
}
const allLessons = creatingAllLessons();
console.log(allLessons);

const totalStudents = () => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
  console.log(studentsLesson1 + studentsLesson2 + studentsLesson3);
}
totalStudents();