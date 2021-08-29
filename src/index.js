/**
 * @desafio # Text limit
 * - Limita os textos <p> em 15 caracteres
 * - se passar do LIMIT vai adicionar "..." ou " "
 */
const elements = document.querySelectorAll(".text-limit p");
const LIMIT = 15;

for (const p of elements) {
  const aboveLimit = p.innerHTML.length > LIMIT;
  const dotsOrEmpty = aboveLimit ? "..." : "";
  p.innerHTML = p.innerHTML.substring(0, LIMIT) + dotsOrEmpty;
}
