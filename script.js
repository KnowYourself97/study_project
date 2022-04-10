let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You watched not enough films!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are cinemaholic!');
    } else {
        console.log('Error!');
    }

}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite movie is number ${i}`);
    }
}
writeYourGenres();

// function first() {    //callback example
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
//  first();
//  second();

//  function learnJS(lang, callback) {
//      console.log(`I am learning: ${lang}`);
//      callback();
//  }

//  learnJS('JavaScript', function() {
//      console.log('This lesson done!');
//  }); 

// objects, destructorization, property

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();
// console.log(Object.keys(options).length);

// const {border, bg} = options.colors; // destructorization
// console.log(bg, border);

//console.log(options.colors.border);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Setting ${i}, has value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Setting ${key}, has value ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

