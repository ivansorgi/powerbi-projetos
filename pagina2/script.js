// Função para verificar a posição da página e exibir ou ocultar o botão
window.onscroll = function() {
  exibirOcultarBotao();
};

function exibirOcultarBotao() {
  var btnVoltarTopo = document.querySelector(".btn-voltar-topo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnVoltarTopo.classList.add("mostrar");
  } else {
    btnVoltarTopo.classList.remove("mostrar");
  }
}

// Função para voltar ao início da página
function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}