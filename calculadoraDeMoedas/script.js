function Converter() {
   var valorElemento = document.getElementById("valor");
   var valor = valorElemento.value;
   var tipoMoeda = document.getElementById("moeda");
   var moeda = tipoMoeda.value;
   moeda = moeda.toLowerCase()
   var valorASerConvertido = parseFloat(valor);
   var elementoValorConvertido = document.getElementById("valorConvertido");

   if(moeda === "dolar")
   {
    let valorEmReal = valorASerConvertido * 5.09;
   
    let valorConvertido = "O resultado em real é R$ " + valorEmReal; 
    elementoValorConvertido.innerHTML = valorConvertido;

   }else if(moeda === "libra")
   {
    let valorEmReal = valorASerConvertido * 6.26;

    let valorConvertido = "O resultado em real é R$ " + valorEmReal; 
    elementoValorConvertido.innerHTML = valorConvertido;
   }else if(moeda==="euro")
   {
    let valorEmReal = valorASerConvertido * 5.52;
   
    let valorConvertido = "O resultado em real é R$ " + valorEmReal; 
    elementoValorConvertido.innerHTML = valorConvertido;
   }else {
    alert("Não sei converter!")
   }

  }
  