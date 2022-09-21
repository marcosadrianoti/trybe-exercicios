const a = 10;
const b = 50;
const c = 50;

if (a > b && a > c) {
  console.log("'a' é o maior de todos");
} else if (b > a && b > c) {
  console.log("'b' é o maior de todos");
}else if (c > a && c > b) {
  console.log("'c' é o maior de todos");
} else {
  console.log("Não há um número único maior que todos");
}