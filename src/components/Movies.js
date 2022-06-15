import React from "react";
import { movies } from "../data";

function Movies() {

  return (<>
    <h1>Movies Page</h1>
    {movies.map((movie, index )=> {
    return  <div key={index} >
      {movie.title} - {movie.time}min
    <ul >{movie.genres.map((genre, index) => <li key={index} > {genre} </li> )}</ul>
    </div>
    })}
    </>)
}
export default Movies;
