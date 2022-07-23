const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca();

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n");
  const letra = chute;
  jogo.chutar(letra);
  console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());