class Search extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this._shadowRoot.getElementById("search-input").value;
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    
    .container-search {
      margin: auto;
      display: flex;
      justify-content: center;
    }
    
    .container-search > input {
        width: 75%;
        padding: 15px;
        border-radius: 10px 0 0 10px;
        font-size: 15px;
        border: none;
        cursor: pointer;
        outline: none;
    }
    
    .container-search > input:focus::placeholder {
        font-weight: bold;
    }
    
    .container-search > button {
        background-color: #475569;
        border: none;
        padding: 7px;
        border-radius: 0 10px 10px 0;
        font-size: 15px;
        cursor: pointer;
        color: white;
        transition: .3s ease-in;
    }
    
    .container-search > button:hover {
        background-color: #6a7f9b;
    }
    
    @media screen and (max-width: 320px) {
        .container-search > input {
          width: 90%;
            padding: 10px;
            font-size: 15px;
        }
        .container-search > button {
            padding: 3px;
            font-size: 11px;
        }
    }
    </style>
    <div class="container-search">
      <input type="search" placeholder="search movie" id="search-input" />
      <button type="submit" id="search-button">Search</button>
    </div>
    `;

    this._shadowRoot
      .getElementById("search-button")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", Search);
