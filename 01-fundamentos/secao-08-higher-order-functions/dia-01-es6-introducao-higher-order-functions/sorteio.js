const raffle = (userNumber, win) => {
  const raffledNumber = parseInt(Math.random() * 6);
  return win(raffledNumber, userNumber);
}

const win = (raffledNumber, userNumber) => {
  return raffledNumber === userNumber ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(raffle(3, win));