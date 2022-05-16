var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var elementoTentativa = document.getElementById("resultado");
elementoTentativa.innerHTML = "Você tem " + tentativas + " tentativas.";
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoTentativa2 = document.getElementById("resultado2");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    elementoTentativa2.innerHTML = "Parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10.";
  } else {
    if (chute > numeroSecreto) {
      elementoTentativa2.innerHTML = "A resposta é menor que " + chute + ".";
    } else {
      elementoTentativa2.innerHTML = "A resposta é maior que " + chute + ".";
    }
    tentativas--;
    if (tentativas > 0) {
      elementoResultado.innerHTML =
        "Você errou! Agora, tem " + tentativas + " tentativas.";
    } else if (tentativas == 0) {
      elementoTentativa.innerHTML =
        "Você perdeu! A resposta era: " + numeroSecreto;
    }
  }
}