function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var conversorDolarReal = 5.6;
    var valorEmReal = valorEmDolarNumerico * conversorDolarReal;
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorConvertido; //Impressão na tela
    console.log(valorConvertido); //Impressão no console
  }