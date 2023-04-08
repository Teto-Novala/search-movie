class Judul extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    :host{
      display: block;
      background-color: rgb(95, 107, 124);
      font-size: 20px;
      text-align: center;
      color: white;
      letter-spacing: 3px;
    }
    h1{
      padding : 18px;
    }
  
    @media screen and (max-width : 768px) {
      :host {
          font-size: 20px;
      }
    }
    @media screen and (max-width : 320px) {
      :host {
          font-size: 15px;
      }
    }
    </style>
    <h1 class="judul">Find Movie</h1>
    `;
  }
}

customElements.define("judul-bar", Judul);
