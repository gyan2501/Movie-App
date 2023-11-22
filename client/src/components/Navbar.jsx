
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Input,
} from "@chakra-ui/react";
import { MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar({ onSearch }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [searchQuery, setSearchQuery] = useState("");

  // search function
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // Invoke the provided onSearch callback with the search query
      onSearch(searchQuery);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to={"/"}>
              <Heading
                as="h5"
                size="sm"
                fontSize={{ base: "16px", sm: "20px", md: "24px", lg: "28px" }}
              >
                Movie Application
              </Heading>
            </Link>
          </Box>
          <Box
            mr={{ base: "2px", sm: "5px", md: "30px" }}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Input
              placeholder="Search movies..."
              border={"1px solid grey"}
              bgColor={"whiteAlpha.400"}
              mr={"5px"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button colorScheme="blue" variant="solid" onClick={handleSearch}>
              <Search2Icon />
            </Button>
          </Box>
          <Flex alignItems={"center"}>
            <Stack
              direction={"row"}
              spacing={{ base: "5px", sm: "5px", md: "30px", lg: "30px" }}
            >
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}