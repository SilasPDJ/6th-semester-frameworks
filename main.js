let precoUnitario = document.querySelector("#precoUnitario");
let quantidadeProduto = document.querySelector("#quantidadeProduto");
let calcularButton = document.querySelector("#calcularButton");
let resultadoLista = document.querySelector("#resultadoLista");

let resultados = [];

calcularButton.addEventListener("click", function () {
  let preco = parseFloat(precoUnitario.value);
  let quantidade = parseInt(quantidadeProduto.value);
  const TOTAL = preco * quantidade;

  resultados.push(TOTAL);

  // Exibir o resultado na lista
  let novoResultadoItem = document.createElement("li");

  let botaoRemover = document.createElement("button");
  botaoRemover.type = "button"
  botaoRemover.textContent = "❌";
  botaoRemover.addEventListener("click", function () {
    // Encontrar o índice do item na lista
    let index = resultados.indexOf(TOTAL);

    if (index !== -1) {
      // Remove o item da lista
      resultados.splice(index, 1);
      resultadoLista.removeChild(novoResultadoItem);
    }
  });

  // copiar o item ao clicar
  novoResultadoItem.addEventListener("click", function () {
    // let itemCopiado = novoResultadoItem.textContent.replace("❌", "");
    navigator.clipboard.writeText(TOTAL)
  });

  // novoResultadoItem.textContent = `${resultados.length} - Total: R$ ${TOTAL.toFixed(2)}`;
  novoResultadoItem.innerHTML = `${resultados.length})<br> PU: R$ ${preco.toFixed(2)} <br> UN: ${quantidade} <br> TOTAL: R$ ${TOTAL.toFixed(2)}`;
  novoResultadoItem.appendChild(botaoRemover);

  resultadoLista.appendChild(novoResultadoItem);

  // Limpar os campos de entrada
  precoUnitario.value = "";
  quantidadeProduto.value = "";
});
