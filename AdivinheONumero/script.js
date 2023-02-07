var numeroSecreto = parseInt(Math.random() *1001);

function Chutar()
{  
    var chute = parseInt(document.getElementById("valor").value);

    if(chute > 1000 || chute < 0)
    {   
        alert("Digite um número entre 0 e 1000");
    }
    if(chute == numeroSecreto)
    { 
        alert("Acertou o número era " + numeroSecreto)  
    } else if(chute > numeroSecreto)
    { 
        alert("Errou... o número secreto é menor!")
    } else if(chute < numeroSecreto)
    { 
        alert("Errou... o número secreto é maior!")
    }
  
}

