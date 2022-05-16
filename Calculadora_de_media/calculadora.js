function Calcular() {
    var valor1 = document.getElementById("valor1");
    var nota1 = valor1.value;
    var valorNota1 = parseFloat(nota1);
  
    var valor2 = document.getElementById("valor2");
    var nota2 = valor2.value;
    var valorNota2 = parseFloat(nota2);
  
    var valor3 = document.getElementById("valor3");
    var nota3 = valor3.value;
    var valorNota3 = parseFloat(nota3);
  
    var media = (valorNota1 + valorNota2 + valorNota3) / 3;
  
    var mediaFinal = "A sua média é " + media;
    var elementoMediaFinal = document.getElementById("mediaFinal");
    elementoMediaFinal.innerHTML = mediaFinal; //Impressão na tela
    //console.log(mediaFinal); //Impressão no console
  }
  