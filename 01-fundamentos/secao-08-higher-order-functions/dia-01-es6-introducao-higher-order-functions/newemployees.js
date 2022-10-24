const hiredPerson = (fullName) => {
  const emailFullName = fullName.split(' ').join('_');
  const datasHiredPerson = {'Nome': fullName, 'Email': `${emailFullName.toLowerCase()}@trybe.com`}
  return datasHiredPerson;
};

const newEmployees = (hiredPerson) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  employees.id1 = hiredPerson('Pedro Guerra');
  employees.id2 = hiredPerson('Luiza Drumond');
  employees.id3 = hiredPerson('Carla Paiva');

  return employees;
};

console.log(newEmployees(hiredPerson));