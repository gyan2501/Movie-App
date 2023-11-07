import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  console.log("el",el);
  return (
    <Box boxShadow="2xl" rounded="md">
      <Link to={`/${el.imdbID}`} style={{ textDecoration: "none" }}>
        <Image src={el.Poster} alt={el.Title} width={"100%"} height={"400px"} />
      </Link>
      <Flex m={5} mb={3} justifyContent={"space-between"}>
        <Box alignContent={"center"}>
          <Heading as="h6" size="xs" mb={"5"}>
            Title: {el.Title}
          </Heading>
          <Heading as="h6" size="xs">
            Year: {el.Year}
          </Heading>
        </Box>
        <Box>
          {/* IMDb Rating: {el.imdbRating} */}
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieCard;
