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
  const newLesson1 = { 'lesson1': lesson1 };
  const newLesson2 = { 'lesson2': lesson2 };
  const newLesson3 = { 'lesson3': lesson3 };
  const allLessons = Object.assign({}, newLesson1, newLesson2, newLesson3)
  return allLessons;
}
const allLessons = creatingAllLessons();
console.log(allLessons);

const totalStudents = () => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
  return studentsLesson1 + studentsLesson2 + studentsLesson3;
}
console.log(totalStudents());

const getValueByNumber = (lesson, position) => {
  const values = Object.values(lesson);
  return values[position];
}
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (lesson, key, value) => {
  const lessonKeys = Object.keys(lesson);
  const test = lessonKeys.includes(key) && lesson[key] == value ? true : false;
  return test;
};
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const mathClass = (allLessons) => {
  const lessons = Object.keys(allLessons);
  let students = 0;
  let materia = '';
  for (const lesson of lessons) {
    materia = allLessons[lesson].materia;
    if (materia == 'Matemática') {
      students += allLessons[lesson].numeroEstudantes;
    }
  }
  return `${students} estudantes assistiram às aulas de Matemática.`;
}

console.log(mathClass(allLessons));

const createReport = (allLessons, teacher) => {
  const lessons = Object.keys(allLessons);
  let prof = '';
  const arrLessons = [];
  let students = 0;
  const objReport = {};
  for (const lesson of lessons) {
    prof = allLessons[lesson].professor;
    if (prof == teacher) {
      arrLessons.push(allLessons[lesson].materia);
      students += allLessons[lesson].numeroEstudantes;
    }
  }
  objReport.professor = teacher;
  objReport.aulas = arrLessons;
  objReport.estudantes = students;
  return objReport;
}

console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
