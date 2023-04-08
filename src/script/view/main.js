import "../components/movie-list";
import "../components/search.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  // const buttonSearchElement = document.querySelector("#searchButtonElement");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      hasil(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const hasil = (hasil) => {
    movieListElement.movies = hasil;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  // buttonSearchElement.addEventListener("click", onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
