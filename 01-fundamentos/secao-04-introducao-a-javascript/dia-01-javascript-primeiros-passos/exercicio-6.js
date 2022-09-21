const currentHour = 6;
let message = "";

if (currentHour >= 22) {
  message = "HOra de dormir";
}else if (currentHour>= 18 && currentHour < 22) {
  message = "Rango da noite";
}else if (currentHour >= 14 && currentHour < 18) {
  message = "Bolo para o café da tarde";
}else if (currentHour > 11 && currentHour < 14) {
  message = "Almoço";
}else if (currentHour > 4 && currentHour < 11) {
  message = "cheiro de café";
}

console.log(message);