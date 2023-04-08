class MovieItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  getUrl(posterPath) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .container-item{
        width: 70%;
        padding-top: 35px;
        background-color: rgb(74, 83, 95);
        margin: 50px auto;
        border-radius: 10px;
        object-fit: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    img {
        width: 50%;
        margin-bottom: 30px;
    }

    .container-text {
      width: 100%;
      margin: auto;
      color: black;
      background-color: white;
      object-fit: cover;
    }
    
    h2 {
      font-weight: bold;
      text-align:center;
      margin: 10px auto 13px ;
    }
    p {
      width: 90%;
      padding-bottom: 20px;
      margin: auto;
      text-align: justify;
      overflow-wrap: break-word;
    }
    @media screen and (max-width: 320px) {
      .container-item {
          width: 100%;
      }
      img{
        width: 70%;
      }
      h2{
        font-size: 20px;
      }
      p{
        font-size: 15px;
      }
    }
    </style>
    <div class="container-item">
        <img src="${this.getUrl(this._movie.poster_path)}" alt="${
      this._movie.title
    }" />
      <div class="container-text">
        <h2>${this._movie.title}</h2>
        <p>
          ${this._movie.overview}
        </p>
      </div>
    </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);
