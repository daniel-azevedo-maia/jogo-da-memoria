let armazenados = []
let ids = []
let contagemVitoria = 0

function revela(id) {
  // Obtém a classe do elemento com o ID informado
  const classeElemento = document.getElementById(id).className

  // Armazena a classe e o ID do elemento
  armazenados.push(classeElemento)
  ids.push(id)

  console.log(armazenados)
  console.log(ids)

  // Adiciona a classe para mostrar o elemento
  document.getElementById(ids[0]).className = 'revela' + ids[0]

  if(armazenados.length == 2) {
    if (armazenados[0] == armazenados[1]) {
      // Mostra mensagem de acerto e atualiza a contagem de vitórias
      swal("Você acertou!", "", "success");
      contagemVitoria++
      
      // Verifica se o jogo foi vencido
      verificaVitoria()

      // Adiciona a classe para mostrar os elementos acertados
      document.getElementById(ids[0]).className = 'revela' + ids[0]
      document.getElementById(ids[1]).className = 'revela' + ids[1] 

      // Limpa os vetores de armazenamento
      limpaVetores()

    } else {
      // Mostra mensagem de erro e oculta os elementos errados
      document.getElementById(ids[1]).className = 'revela' + ids[1]
      swal("Você errou!", "", "error");
      document.getElementById(ids[0]).className = armazenados[0]
      document.getElementById(ids[1]).className = armazenados[1]

      // Limpa os vetores de armazenamento
      limpaVetores()
    }

  } else if (armazenados.length == 1 && armazenados[0] == 'sempar') {
    // Mostra mensagem de erro para elemento ímpar
    alert('Não há uma imagem corresponde a esta figura!')
    
    // Atualiza a contagem de vitórias e verifica se o jogo foi vencido
    contagemVitoria++
    verificaVitoria()

    // Remove o elemento ímpar dos vetores de armazenamento
    armazenados.pop()
    ids.pop()
  }
}

function limpaVetores() {
  // Limpa os vetores de armazenamento
  armazenados.length = 0
  ids.length = 0
}

function verificaVitoria() {
  if (contagemVitoria == 13) {
    // Mostra mensagem de parabéns para o jogador
    swal("PARABÉNS! VOCÊ VENCEU!", "", "success");
  }
}
