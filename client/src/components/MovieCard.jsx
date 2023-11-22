

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  console.log("el",el);
  return (
    <Box boxShadow="2xl" rounded="md" >
      <Link to={`/${el.imdbID}`} style={{ textDecoration: "none" }}>
        <Image src={el.Poster} alt={"image link is broken"}  height={"80%"} objectFit={"fill"} transition={"transform 0.3s ease-in-out"}  _hover={{transform: "scale(1.1)" ,borderRadius:"15px"}}/>
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
          
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieCard;
