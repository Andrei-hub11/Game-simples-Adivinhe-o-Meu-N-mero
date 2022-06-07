let box = document.getElementsByClassName("gameBox")[0];
let melhorScore = document.getElementsByClassName("gameBox__score")[0];
let score = document.getElementsByClassName("gameBox__score")[1];
let resultado = document.getElementsByClassName("gameBox__result")[0];
let btn = document.getElementsByClassName("gameBox__btn")[0];
let btn2 = document.getElementsByClassName("gameBox__btn")[1];
resultado.textContent = "Comece o jogo!";

let numeroAleatorio = Math.floor(Math.random() * 20);
btn2.style.display = "none";

function numerodoUsuario() {
  let numero = 0;
  numero = document.getElementById("check").value;
  return numero;
}

class Pontos {
  constructor(pontos, scoreMax) {
    this.pontos = pontos;
    this.scoreMax = scoreMax;
  }
  reduzPontos() {
    this.pontos = this.pontos - 2;
    if (this.pontos === 0) {
      btn.disabled = true;
      return falha();
    } else {
      return this.pontos;
    }
  }

  restartPontos(x) {
    this.pontos = x;
  }

  bestScore(y) {
    if (y > this.scoreMax) {
      this.scoreMax = y;
      return this.scoreMax;
    } else {
      this.scoreMax = this.pontos;
      return this.scoreMax;
    }
  }
}

const p = new Pontos(20, 0);

function verificandoResultado() {
  if (numerodoUsuario() > numeroAleatorio) {
    resultado.textContent = `Valor acima do número esperado`;
    p.reduzPontos();
    p.bestScore(p.pontos);
    score.textContent = `Score: ${p.pontos}`;
  } else if (numerodoUsuario() < numeroAleatorio) {
    resultado.textContent = `Valor menor do que o número esperado`;
    p.reduzPontos();
    p.bestScore(p.pontos);
    score.textContent = `Score: ${p.pontos}`;
  } else if (numeroAleatorio == numerodoUsuario()) {
    resultado.textContent = `Número correto! ✌`;
    box.style.background = `#66ff00`;
    p.bestScore(p.pontos);
    btn2.style.display = "block";
    btn.disabled = true;
    melhorScore.textContent = `Melhor pontuação: ${p.scoreMax}`;
  }
}

function falha() {
  resultado.textContent = `Você fracassou. ☹`;
  box.style.background = `#ff2400`;
  btn2.style.display = `block`;
}

function reiniciaoJogo() {
  box.style.background = `#17171a`;
  p.restartPontos(20);
  score.textContent = `Score: ${p.pontos}`;
  numeroAleatorio = Math.floor(Math.random() * 20);
  btn2.style.display = `none`;
  resultado.textContent = `Comece o jogo!`;
  btn.disabled = false;
  document.getElementById("check").value = "";
}
