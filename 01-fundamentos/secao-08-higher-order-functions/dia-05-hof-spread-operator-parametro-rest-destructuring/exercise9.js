const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const monthsYear = ({ spring, summer, autumn, winter }) => {
  const monthsOfYear = [
    ...winter,
    ...spring,
    ...summer,
    ...autumn,
  ]
  monthsOfYear.push(monthsOfYear.shift()) //Tira 'December' do início da lista e coloca na última posição.
  return monthsOfYear;
};

console.log(monthsYear(yearSeasons));

module.exports = { monthsYear, yearSeasons };
