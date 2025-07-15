class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        ul { list-style-type: none; padding: 0; }
        li { padding: 4px 0; }
      </style>
      <ul id="lista"></ul>
    `;

    window.addEventListener('rango-seleccionado', (event) => {
      const { inicio, fin } = event.detail;
      const lista = this.shadowRoot.getElementById('lista');
      lista.innerHTML = '';

      for (let i = inicio; i <= fin; i++) {
        const tipo = i % 2 === 0 ? 'Par' : 'Impar';
        const item = document.createElement('li');
        item.textContent = `${i} - ${tipo}`;
        lista.appendChild(item);
      }
    });
  }
}

customElements.define('par-impar-lista', ParImparLista);
