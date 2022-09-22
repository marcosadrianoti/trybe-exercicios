const salarioBruto = 6000.00;
let salarioBase = null;
let alicotaInss = null;
let alicotaInssMax = null;
let alicotaIr = null;
let parcelaIr = null;

// Estabelecendo a alicota do INSS
if (salarioBruto <= 1556.94) {
  alicotaInss = 8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  alicotaInss = 9;  
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  alicotaInss =11;  
} else {
  alicotaInssMax = 570.88;  
}

// Calculando o salário-base
if (alicotaInssMax !== null) {
  salarioBase = salarioBruto - alicotaInssMax
} else {
  salarioBase = salarioBruto - (salarioBruto * alicotaInss) / 100;
}

// Estabelcendo a alícota e a parcela do IR
if (salarioBase <= 1903.98) {
  alicotaIr = 0
  parcelaIr = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65 ) {
  alicotaIr = 7.5
  parcelaIr = 142.80
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05 ) {
  alicotaIr = 15
  parcelaIr = 354.80
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68 ) {
  alicotaIr = 22.5
  parcelaIr = 636.13
} else {
  alicotaIr = 27.5
  parcelaIr = 869.36
}

// Calculando o IR





console.log(salarioBase);