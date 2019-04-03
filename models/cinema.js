const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilmsByTitle = function(){
  const films = this.films;
  const result = films.map( (film) => {
    return film.title
  });
  return result
};

Cinema.prototype.findByTitle = function(title){
  const films = this.films;
  film = films.filter( (movie) => {
    return movie.title === title;
  });
  return film[0];
};

Cinema.prototype.findByGenre = function(genre){
  const films = this.films;
  filmsArray = films.filter( (movie) => {
    return movie.genre == genre;
  });
  return filmsArray;
};

Cinema.prototype.checkForYear = function(year){
  // let filmThere = false;
  const films = this.films;
  const yearArray = films.map( (film) => {
    return film.year
  });
  filmThere = yearArray.includes(year);
  return filmThere;
};

Cinema.prototype.checkMinLength = function(length){
  // let result = false;
  const films = this.films;
  const filmsArray = films.filter( (movie) => {
    return movie.length < length;
  });
  console.log(filmsArray);
  if (filmsArray.length === 0) {
    return true
  }else {
    return false
  }
};

Cinema.prototype.totalRunningTime = function(){
  const films = this.films;
  const filmTimes = films.map( (film) => {
    return film.length
  });
  const totalFilmTimes = filmTimes.reduce((total, sum) => {
    return total + sum;
  });
  return totalFilmTimes;
};

module.exports = Cinema;
