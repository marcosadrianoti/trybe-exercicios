const pecaXadrez = "Rei".toLowerCase();

switch (pecaXadrez) {
  case "bispo":
    console.log("diagonais");
    break;

  case "peão":
    console.log("uma casa por vez e sempre pra frente");
    break;

  case "cavalo":
    console.log("movimento em 'L' e sempre horizontal ou vertical");
    break;

  case "torre":
    console.log("movimento horizontal ou vertical sem limite de casas");
    break;

  case "rainha":
    console.log("movimenta-se livremente em todas as direções e quantidades de casas");
    break;

  case "rei":
    console.log("movimenta-se livremente em todas as direções, mas de uma em uma casa")
    break;

  default:
    console.log("Peça inexistente")
    break;
}