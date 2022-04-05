const numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('one of the last films?', ''),
    b = prompt('you score from 0 to 10?', ''),
    c = prompt('one of the last films?', ''),
    d = prompt('you score from 0 to 10?', '');

personalMovieDB.movies[a] = b; // [] помогают избавиться от багов (прим. кириллица)
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);