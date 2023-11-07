
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./MovieDetails.css"; 

function MovieDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleMovie, setSingleMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://blush-lemur-boot.cyclic.app/movies/${id}`
        );
        setSingleMovie(response.data.movie);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="movie-details-container">
        {isLoading ? (
          [...Array(1).keys()].map((el) => {
            return (
              <div key={el} className="movie-skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-details">
                  <div className="skeleton-title"></div>
                  <div className="skeleton-info"></div>
                  <div className="skeleton-info"></div>
                  <div className="skeleton-info"></div>
                  <div className="skeleton-info"></div>
                  <div className="skeleton-title"></div>
                  <div className="skeleton-info"></div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="movie-details-content">
            <div className="movie-poster">
              <img src={singleMovie.Poster} alt={singleMovie.Title} />
            </div>
            <div className="movie-info">
              <h4 className="movie-title">
              <span>Movie Title:</span>   {singleMovie.Title} ({singleMovie.Type})
              </h4>
              <p> <span>Runtime: </span> {singleMovie.Runtime}</p>
              <p> <span>Released Date: </span> {singleMovie.Released}</p>
              <p> <span>Actors: </span> {singleMovie.Actors}</p>
              <p> <span>Writers: </span> {singleMovie.Writer}</p>
              <p><span>Plot: </span>{singleMovie.Plot}</p>
              <button className="imdb-rating">
                IMDB Rating: {singleMovie.imdbRating}/10
              </button>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
}

export default MovieDetails;
