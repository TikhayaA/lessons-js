let numberOfFilms;

function start() {
     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genros: [],
    privat: false
};

//  let a = prompt("Один из последних просмотренных фильмов?", ""),
//      b = prompt("На соклько оцениваете его?", ""),
//      c = prompt("Один из последних просмотренных фильмов?", ""),
//      d = prompt("На соклько оцениваете его?", "");

//      personalMovieDB.movies[a] = b;    
//      personalMovieDB.movies[c] = d; 
//      console.log(personalMovieDB);


    
    function rememberMyFilms() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцениваете его?", "");
    
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;    
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    }
    // rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        }
         else if(personalMovieDB.count >= 30) {
             console.log("Вы киноман");
        }  else {
             console.log("Произошла ошибка");
        }
    }
    // detectPersonalLevel();

    function showMydB(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }

    showMydB(personalMovieDB.privat);

    function writeYourGenros() {
        for (let i = 1; i <=3; i++) {
            personalMovieDB.genros[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenros();








//  if (4 == 5) {
//      console.log("Ok!");
//  } else {
//      console.log("Error")
//  }

// let num = 60;

// // if (num < 49) {
// //     console.log("Error");
// // } else if (num >100){
// //     console.log("Много");
// // } else { 
// //     console.log("Ok!");
// // }

// (num == 60) ? console.log("Ok!") : console.log("Error");


// let str = "tEst"; 
// let arr = [1, 2, 4];

// console.log(str.toLowerCase());

// let fruit = "Some fruit";
// console.log(fruit.indexOf("r"));

// let logg = "Hello world";

// console.log(logg.substr(6, 2));

// let num = 12.49;
// console.log(Math.round(num));

// let test = "12.8px";
// console.log(parseInt(test));
// console.log(parseFloat(test));