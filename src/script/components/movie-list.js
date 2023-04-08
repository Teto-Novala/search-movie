import "./movie-item.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  renderError(message) {
    this._shadowRoot.innerHTML = `
    <style>
    .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      text-align: center;
    }
    </style>

    `;
    this._shadowRoot.innerHTML += `
    <h2 class="placeholder">${message}</h2>
    `;
  }
  render() {
    this._shadowRoot.innerHTML = "";
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this._shadowRoot.appendChild(movieItemElement);
    });
  }
}

customElements.define("movie-list", MovieList);
