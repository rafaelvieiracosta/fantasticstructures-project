import AnimaNumeros from "./anima-numeros.js";

export default function fetchVisitas(url, target) {
  const visitasGrid = document.querySelector(target);

  function createVisita(estrutura) {
    const div = document.createElement("div");
    div.classList.add("numero-estrutura");
    div.innerHTML = `<h3>${estrutura.estrutura}</h3><span data-numero>${estrutura.total}</span>`;
    return div;
  }

  function preencherVisitas(visita) {
    const divEstrutura = createVisita(visita);
    visitasGrid.appendChild(divEstrutura);
  }

  function animaVisitasNumeros() {
    const animanumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animanumeros.init();
  }

  async function criarVisitas() {
    try {
      const visitasResponse = await fetch(url);
      const visitasJSON = await visitasResponse.json();

      visitasJSON.forEach((visita) => preencherVisitas(visita));
      animaVisitasNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarVisitas();
  fetchVisitas(url);
}
