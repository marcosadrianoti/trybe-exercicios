const valorCusto = 100;
const valorVenda = 130;


if (valorCusto >= 0 && valorVenda >= 0) {
  const impostoSobreOCusto = (valorCusto * 20) / 100;
  const valorCustoTotal = valorCusto + impostoSobreOCusto;
  const lucro = valorVenda - valorCustoTotal;
  console.log("Lucro ao vender 1000 produtos: " + (lucro * 1000));
} else {
  console.log("ERRO! Algum valor é menor que zero");
}