# Implementations

> useCases

---

- limitar tamanho de textos em HTML

  - Usando JavaScript:

  ```js
  const elements = document.querySelectorAll(".text-limit p");
  const LIMIT = 15;

  for (const p of elements) {
    const aboveLimit = p.innerHTML.length > LIMIT;
    const dotsOrEmpty = aboveLimit ? "..." : "";
    p.innerHTML = p.innerHTML.substring(0, LIMIT) + dotsOrEmpty;
  }
  ```

  - Usando CSS

  ```css
  .text-limit {
    max-width: 120px;
  }
  .text-limit p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  ```
