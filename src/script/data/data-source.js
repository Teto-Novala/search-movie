class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e5db82aac6a1e7c9aba2480e7343bc1b&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
