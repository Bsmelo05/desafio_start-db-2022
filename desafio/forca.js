class Forca {
  letrasChutadas = [];
  palavra = [];
  vidas = 6;
  palavraChave = "abacaxi";
  chutar(letra) {
    const letraPresentePalavra = this.palavraChave.includes(letra);
    if (this.vidas <= 0) {
      console.log("Acabou suas vidas!");
    } else if (letraPresentePalavra) {
      console.log("Parabens");
      this.palavra.push(letra);
    } else {
      this.vidas--;
      console.log("Errouu");
    }
    const letraDigitada = this.letrasChutadas.includes(letra);
    this.letrasChutadas.push(letra);
  }

  buscarEstado() {
    const myEnums = {
      PERDEU: "perdeu",
      AGUARDANDOCHUTE: "aguardando chute",
      GANHOU: "ganhou",
    };

    if (this.vidas > 0 && this.palavra.join("") === this.palavraChave) {
      return myEnums.GANHOU;
    } else if (this.vidas == 0) {
      return myEnums.PERDEU;
    }
    return myEnums.AGUARDANDOCHUTE;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas.join(""),
      vidas: this.vidas,
      palavra: this.palavra.join(""),
    };
  }
}
module.exports = Forca;
