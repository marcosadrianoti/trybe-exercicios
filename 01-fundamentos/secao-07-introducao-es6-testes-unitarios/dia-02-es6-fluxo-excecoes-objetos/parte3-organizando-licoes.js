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