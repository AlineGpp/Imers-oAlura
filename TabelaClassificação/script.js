var aline = {
    nome: "Aline",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var felipe = {
    nome: "Felipe",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var gui = {
    nome: "Gui",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var renato = {
    nome: "Renato",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
  };


  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${aline.nome}</td>
            <td>${aline.vitoria}</td>
            <td>${aline.empate}</td>
            <td>${aline.derrota}</td>
            <td>${aline.pontos}</td>
            <td><button onClick="adicionarVitoria(aline)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(aline)">Empate</button></td>
            <td><button onClick="adicionarDerrota(aline)">Derrota</button></td>
        </tr>

        <tr>
            <td>${felipe.nome}</td>
            <td>${felipe.vitoria}</td>
            <td>${felipe.empate}</td>
            <td>${felipe.derrota}</td>
            <td>${felipe.pontos}</td>
            <td><button onClick="adicionarVitoria(felipe)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(felipe)">Empate</button></td>
            <td><button onClick="adicionarDerrota(felipe)">Derrota</button></td>
        </tr>

    `;
  }
  
  function adicionarVitoria(jogador) {
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
    exibirNaTela();
  }
  

  