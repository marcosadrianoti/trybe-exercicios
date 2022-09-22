const salarioBruto = 3000.00;
let salarioBase = null;
let alicotaInss = null;
let alicotaInssMax = null;

if (salarioBruto <= 1556.94) {
  alicotaInss = 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  alicotaInss = 9;  
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  alicotaInss =11;  
} else {
  alicotaInssMax = 570.88;  
}

if (alicotaInssMax !== null) {
  salarioBase = salarioBruto - alicotaInssMax
} else {
  salarioBase = salarioBruto - (salarioBruto * alicotaInss) / 100;
}

console.log(salarioBase);