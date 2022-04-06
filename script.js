const numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('one of the last films?', ''),
        b = prompt('you score from 0 to 10?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('You watched not enough films!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log('You are classic!');
} else if (personalMovieDB.count >= 30) {
    console.log('You are cinemaholic!');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);