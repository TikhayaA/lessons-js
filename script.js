let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genros: [],
    privat: false
};

 let a = prompt("Один из последних просмотренных фильмов?", ""),
     b = prompt("На соклько оцениваете его?", ""),
     c = prompt("Один из последних просмотренных фильмов?", ""),
     d = prompt("На соклько оцениваете его?", "");

     personalMovieDB.movies[a] = b;    
     personalMovieDB.movies[c] = d; 
     console.log(personalMovieDB);