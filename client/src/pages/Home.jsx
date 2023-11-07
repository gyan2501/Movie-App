
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import './Home.css'; 

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSearchMovies = (searchQuery) => {
    axios
      .get(`https://blush-lemur-boot.cyclic.app/movies/search`, {
        params: { query: searchQuery },
      })
      .then((res) => {
        const movieData = res.data.movies.Search;
        setMovies(movieData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  useEffect(() => {
    getSearchMovies();
  }, []);

  return (
    <>
    
   <Navbar onSearch={getSearchMovies} />
    <div className="home-container">
      

      <div className="movie-grid">
        {isLoading
          ? [...Array(10).keys()].map((el) => {
              return (
                <div key={el} className="movie-item">
                  <div className="skeleton">
                    <div className="skeleton-image"></div>
                  </div>
                  <div className="movie-details">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-year"></div>
                  </div>
                </div>
              );
            })
          : movies?.map((el) => <MovieCard key={el.id} el={el} />)}
      </div>
    </div> </>
  );
};

export default Home;
