
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "./MovieDetails.css"; 

// function MovieDetails() {
//   const { id } = useParams();
//   const [isLoading, setIsLoading] = useState(true);
//   const [singleMovie, setSingleMovie] = useState({});

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://blush-lemur-boot.cyclic.app/movies/${id}`
//         );
//         setSingleMovie(response.data.movie);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="movie-details-container">
//         {isLoading ? (
//           [...Array(1).keys()].map((el) => {
//             return (
//               <div key={el} className="movie-skeleton">
//                 <div className="skeleton-image"></div>
//                 <div className="skeleton-details">
//                   <div className="skeleton-title"></div>
//                   <div className="skeleton-info"></div>
//                   <div className="skeleton-info"></div>
//                   <div className="skeleton-info"></div>
//                   <div className="skeleton-info"></div>
//                   <div className="skeleton-title"></div>
//                   <div className="skeleton-info"></div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="movie-details-content">
//             <div className="movie-poster">
//               <img src={singleMovie.Poster} alt={singleMovie.Title} />
//             </div>
//             <div className="movie-info">
//               <h4 className="movie-title">
//               <span>Movie Title:</span>   {singleMovie.Title} ({singleMovie.Type})
//               </h4>
//               <p> <span>Runtime: </span> {singleMovie.Runtime}</p>
//               <p> <span>Released Date: </span> {singleMovie.Released}</p>
//               <p> <span>Actors: </span> {singleMovie.Actors}</p>
//               <p> <span>Writers: </span> {singleMovie.Writer}</p>
//               <p><span>Plot: </span>{singleMovie.Plot}</p>
//               <button className="imdb-rating">
//                 IMDB Rating: {singleMovie.imdbRating}/10
//               </button>
//             </div>
//           </div>
//         )}
//       </div>{" "}
//     </>
//   );
// }

// export default MovieDetails;

import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function MovieDetails({ el }) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [singleMovie, setSingleMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://blush-lemur-boot.cyclic.app/movies/${id}`);
        setSingleMovie(response.data.movie);
        // console.log("details", response.data.movie);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);
  // console.log("details movie", singleMovie);
  return (
    <Box>
      <Navbar />

      {isLoading ? (
        [...Array(1).keys()].map((el) => {
          return (
            <Flex
              justify={"center"}
              flexDir={{ base: "column", md: "row" }}
              width="87vw"
              marginX="auto"
              my="2rem"
              key={el}
            >
              {/* skeleton */}
              <Box
                width={{ base: "95%", lg: "50%" }}
                height={{ base: "40vh", lg: "60vh" }}
              >
                <Skeleton height={"100%"} width="100%" borderRadius={"xl"} />
              </Box>
              <Flex
                width="65%"
                px={"3rem"}
                flexDir="column"
                gap="2rem"
                py="2rem"
              >
                <Skeleton height="30px" />
                <Skeleton height="18px" width="250px" />
                <Skeleton height="40px" width="160px" borderRadius={"xl"} />
                <Skeleton height="18px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="40px" width="160px" borderRadius={"xl"} />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
                <Skeleton height="18px" width="500px" />
              </Flex>
            </Flex>
          );
        })
      ) : (
        <Flex
          justify={"center"}
          flexDir={{ base: "column", md: "row" }}
          width={{ base: "87vw", md: "87vw" }}
          marginX="auto"
          my="2rem"
          textAlign={"justify"}
          h={"80vh"}
        >
          <Box
            width={{ base: "95%", lg: "50%" }}
            height={{ base: "80vh", lg: "60vh" }}
          >
            <Image
              height={"85vh"}
              width="60%"
              borderRadius={"xl"}
              src={singleMovie.Poster}
            />
          </Box>
          <Flex
            width={{ base: "95%", lg: "50%", sm: "100%" }}
            px={"2rem"}
            flexDir="column"
            gap="2rem"
            py="1rem"
            overflow={"auto"}
            className="custom-scrollbar"
            mt={4}
          >
            <Heading as="h4" size="md">
              Movie Title: {singleMovie.Title} {`(${singleMovie.Type})`}
            </Heading>
            <Text height="18px" width="250px">
              Runtime : {singleMovie.Runtime}
            </Text>
            <Text height="18px" width="250px">
              Released Date : {singleMovie.Released}
            </Text>

            <Text>Actors: {singleMovie.Actors}</Text>
            <Text> Writers: {singleMovie.Writer}</Text>

            <Text>{singleMovie.Plot}</Text>

            <Button
              height="40px"
              width="160px"
              borderRadius={"xl"}
              p={2}
              colorScheme="yellow"
            >
              IMDB Rating: {singleMovie.imdbRating}
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default MovieDetails;