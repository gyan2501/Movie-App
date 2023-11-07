import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; // Import your CSS file

const MovieCard = ({ el }) => {
  console.log("el", el);
  return (
    <div className="movie-card">
      <Link to={`/${el.imdbID}`} style={{ textDecoration: "none" }}>
        <img src={el.Poster} alt={el.Title} />

        <div className="movie-details">
          <div className="title-year">
            <h6 className="title">Title: {el.Title}</h6>
            <h6 className="year">Year: {el.Year}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
