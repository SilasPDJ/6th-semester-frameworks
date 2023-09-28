// Selecionar os elementos do DOM
let precoUnitario = document.querySelector("#precoUnitario");
let quantidadeProduto = document.querySelector("#quantidadeProduto");
let calcularButton = document.querySelector("#calcularButton");
let resultadoDiv = document.querySelector("#resultado");

// Adicionar um ouvinte de evento para o botão de cálculo
calcularButton.addEventListener("click", function () {
  // Obter os valores dos campos de entrada
  let preco = parseFloat(precoUnitario.value);
  let quantidade = parseInt(quantidadeProduto.value);

  // Realizar o cálculo
  let total = preco * quantidade;

  // Exibir o resultado na div
  resultadoDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
});

// Adicionar um ouvinte de evento para limpar o resultado
resultadoDiv.addEventListener("click", function () {
  resultadoDiv.textContent = "";
});
