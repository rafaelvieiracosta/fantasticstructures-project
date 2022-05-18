import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchVisitas() {
  async function fetchVisitas(url) {
    try {
      const visitasResponde = await fetch(url);
      const visitasJSON = await visitasResponde.json();
      const visitasGrid = document.querySelector(".numeros-grid");

      visitasJSON.forEach((visita) => {
        const divEstrutura = createVisita(visita);
        visitasGrid.appendChild(divEstrutura);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createVisita(estrutura) {
    const div = document.createElement("div");
    div.classList.add("numero-estrutura");
    div.innerHTML = `<h3>${estrutura.estrutura}</h3><span data-numero>${estrutura.total}</span>`;
    return div;
  }
  fetchVisitas("./visitasapi.json");
}
