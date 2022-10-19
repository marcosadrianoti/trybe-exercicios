// const factorial = number => {
//   let result = 0;
//   for (let index = 1; index <= number; index++) {
//     result = index === 1 ? 1 : result * index;
//   }
//   return result;
// }
// console.log(`Esse é o fatorial resultado da função: ${factorial(5)}`);

//testando recursividade.
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));
