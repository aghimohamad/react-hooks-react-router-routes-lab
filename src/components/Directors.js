import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <>
    <h1>Directors Page</h1>
    {directors.map((director, index )=> {
    return  <div key={index} >
      {director.name}
    <ul >{director.movies.map((movie, index) => <li key={index} > {movie} </li> )}</ul>
    </div>
    })}
  </>
  );
}

export default Directors;
