const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (RIGHT_ANSWERS, STUDENT_ANSWERS, scoreAccount) => {
  return scoreAccount(RIGHT_ANSWERS, STUDENT_ANSWERS);
};

const scoreAccount = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let pontuacao = 0;
  for (let index = 0; index < 10; index++) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index] && STUDENT_ANSWERS[index] !== 'N.A') {
      pontuacao += 1;
    } else if (STUDENT_ANSWERS[index] !== 'N.A') {
      pontuacao -= 0.5;
    };
  }
  return pontuacao;
}

console.log(corrector(RIGHT_ANSWERS, STUDENT_ANSWERS, scoreAccount));
