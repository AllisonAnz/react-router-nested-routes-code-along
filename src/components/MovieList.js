//Create our movieList comp. to render React Router 'Link' for each movie:
//The movies prop has been passed from App to MoviesPage, then again to MoviesList
//Using object destructuring to get movies directly, rather than having to write props.movies in multiple places 
//movies prop is an object containing each movie. To iterate over the object we used Object.keys(movie) 
//to get an array of keys then map over this array 
import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieID =>
        <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    );

    return (
        <div>
            {renderMovies}
        </div>
    );
};

export default MoviesList;