// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(currentMovie => currentMovie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const dramaMovies = moviesArray.filter(currentMovie => currentMovie.director === "Steven Spielberg" && currentMovie.genre.includes("Drama"));
    return moviesCount = dramaMovies.length;    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scoreSum = moviesArray.reduce((sum, currentMovie) => {
        if (currentMovie.score === null || currentMovie.score === undefined) {
        return sum} 
        else {return sum + currentMovie.score}}, 0);
    const avg  = scoreSum / moviesArray.length; 
    return avgRounded = Math.round(avg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(currentMovie => currentMovie.genre.includes("Drama"));
    if (dramaMoviesArray.length === 0) {
        return 0;
    }
    const dramaScoreSum = dramaMoviesArray.reduce((sum, currentMovie) => {
        if (currentMovie.score === null || currentMovie.score === undefined) {
        return sum} 
        else {return sum + currentMovie.score}}, 0);
    const avg  = dramaScoreSum / dramaMoviesArray.length; 
    return avgRounded = Math.round(avg * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortByYear = moviesArray.toSorted((movie1, movie2) => {
            if (movie1.year === movie2.year) {
               return movie1.title.localeCompare(movie2.title);
         }
        return movie1.year - movie2.year;
    });
    return sortByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesByTitle = moviesArray.toSorted((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title);
     });
    
    const sortedTitles= moviesByTitle.map(currentMovie => currentMovie.title);
    const only20SortedTitles = sortedTitles.slice(0, 20);
    return only20SortedTitles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
