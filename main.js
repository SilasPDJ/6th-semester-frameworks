// Retrieve stored data from localStorage if available
let resultados = JSON.parse(localStorage.getItem('resultados')) || [];
const resultadoLista = document.querySelector("#resultadoLista");

// Function to display stored results
function displayStoredResults() {
  resultadoLista.innerHTML = "";

  resultados.forEach(function (result, index) {
    console.log(result)
    const { TOTAL, pu, qtd } = result
    console.log(TOTAL, pu, qtd)
    let novoResultadoItem = document.createElement("li");

    let botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.textContent = "❌";
    botaoRemover.addEventListener("click", function () {
      // Find the index of the item in the list
      let index = resultados.indexOf(result);

      if (index !== -1) {
        // Remove the item from the list
        resultados.splice(index, 1);
        resultadoLista.removeChild(novoResultadoItem);

        // Update the localStorage after removing
        localStorage.setItem('resultados', JSON.stringify(resultados));
      }
      displayStoredResults()

    });

    novoResultadoItem.addEventListener("click", function () {
      navigator.clipboard.writeText(TOTAL);
    });

    // novoResultadoItem.innerHTML = `${index + 1})<br> TOTAL: R$ ${TOTAL}`;
    novoResultadoItem.innerHTML = `${resultados.length})<br> PU: R$ ${pu} <br> UN: ${qtd} <br> TOTAL: R$ ${TOTAL}`;
    novoResultadoItem.appendChild(botaoRemover);

    resultadoLista.appendChild(novoResultadoItem);
  });
}

window.addEventListener('load', displayStoredResults);

let calcularButton = document.querySelector("#calcularButton");

calcularButton.addEventListener("click", function () {
  let precoUnitario = parseFloat(document.querySelector("#precoUnitario").value);
  let quantidadeProduto = parseInt(document.querySelector("#quantidadeProduto").value);
  const TOTAL = precoUnitario * quantidadeProduto;

  const novoResultado = {
    TOTAL: TOTAL.toFixed(2),
    pu: precoUnitario,
    qtd: quantidadeProduto,
  };

  // resultados.push(TOTAL.toFixed(2));
  resultados.push(novoResultado)


  // Update the localStorage after adding a new item
  localStorage.setItem('resultados', JSON.stringify(resultados));

  // Display the new result
  displayStoredResults();

  // Clear the input fields
  document.querySelector("#precoUnitario").value = "";
  document.querySelector("#quantidadeProduto").value = "";
});
