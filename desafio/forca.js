class Forca {
  myEnums = {
    PERDEU: "perdeu",
    AGUARDANDOCHUTE: "aguardando chute",
    GANHOU: "ganhou",
  };
  constructor(palavraSecreta) {
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = new Array(palavraSecreta.length).fill("_");
    this.palavraSecreta = palavraSecreta.split("");
  }
  chutar(letra) {
    if (letra.length > 1 || this.letrasChutadas.includes(letra)) {
      return this.myEnums.AGUARDANDOCHUTE;
    }
    if (this.palavraSecreta.includes(letra)) {
      this.letrasChutadas.push(letra);
      this.palavraSecreta.forEach((element, index) => {
        if (element === letra) {
          this.palavra[index] = element;
        }
      });
    } else {
      this.letrasChutadas.push(letra);
      this.vidas--;
    }
  }

  buscarEstado() {
    if (this.vidas === 0) return this.myEnums.PERDEU;
    if (!this.palavra.includes("_")) return this.myEnums.GANHOU;
    return this.myEnums.AGUARDANDOCHUTE;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
