
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import MovieCard from "../components/MovieCard";
// import axios from "axios";
// import './Home.css'; 

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const getSearchMovies = (searchQuery) => {
//     axios
//       .get(`https://blush-lemur-boot.cyclic.app/movies/search`, {
//         params: { query: searchQuery },
//       })
//       .then((res) => {
//         const movieData = res.data.movies.Search;
//         setMovies(movieData);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Axios error:", error);
//       });
//   };

//   useEffect(() => {
//     getSearchMovies();
//   }, []);

//   return (
//     <>
    
//    <Navbar onSearch={getSearchMovies} />
//     <div className="home-container">
      

//       <div className="movie-grid">
//         {isLoading
//           ? [...Array(10).keys()].map((el) => {
//               return (
//                 <div key={el} className="movie-item">
//                   <div className="skeleton">
//                     <div className="skeleton-image"></div>
//                   </div>
//                   <div className="movie-details">
//                     <div className="skeleton-title"></div>
//                     <div className="skeleton-year"></div>
//                   </div>
//                 </div>
//               );
//             })
//           : movies?.map((el) => <MovieCard key={el.id} el={el} />)}
//       </div>
//     </div> </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Grid, HStack, Skeleton, Stack } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

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
        // console.log(res.data.movies.Search);
        setMovies(movieData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  };

  // console.log("arr", movies);

  useEffect(() => {
    getSearchMovies();
  }, []);

  return (
    <div>
      <Navbar onSearch={getSearchMovies} />

      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(5,1fr)",
        }}
        gap={8}
        p={6}
        mb={10}
      >
        {isLoading
          ? [...Array(15).keys()].map((el) => {
              return (
                <Stack key={el} width={"100%"}>
                  <Skeleton
                    height={{ base: "250px", md: "250px" }}
                    width={{ base: "300px", md: "350px" }}
                    borderRadius={"md"}
                  />
                  <HStack width={"100%"}>
                    <Skeleton
                      height="16px"
                      h={"40px"}
                      w={"80"}
                      borderRadius={"md"}
                    />
                    <Skeleton
                      height="16px"
                      w={"20%"}
                      h={"40px"}
                      borderRadius={"md"}
                    />
                  </HStack>
                </Stack>
              );
            })
          : movies?.map((el) => <MovieCard key={el.id} el={el} />)}
      </Grid>
    </div>
  );
};

export default Home;