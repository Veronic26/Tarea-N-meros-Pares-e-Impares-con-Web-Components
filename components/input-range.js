class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        div { margin-bottom: 10px; }
        label { margin-right: 5px; }
        button { margin-top: 5px; }
      </style>
      <div>
        <label>Inicio:</label>
        <input type="number" id="inicio" />
      </div>
      <div>
        <label>Fin:</label>
        <input type="number" id="fin" />
      </div>
      <button id="enviar">Enviar</button>
    `;

    this.shadowRoot.getElementById('enviar').addEventListener('click', () => {
      const inicio = parseInt(this.shadowRoot.getElementById('inicio').value);
      const fin = parseInt(this.shadowRoot.getElementById('fin').value);

      if (isNaN(inicio) || isNaN(fin)) {
        alert('Por favor, ingresa valores numéricos.');
        return;
      }

      if (inicio > fin) {
        alert('El número de inicio debe ser menor o igual al número final.');
        return;
      }

      this.dispatchEvent(new CustomEvent('rango-seleccionado', {
        detail: { inicio, fin },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('input-range', InputRange);
