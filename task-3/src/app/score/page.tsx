/** @format */

"use client";
import { NextPage } from "next";
import {
  Flex,
  Grid,
  GridItem,
  Box,
  Text,
  HStack,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar";
import { FaBell, FaCog, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import NextMatch from "../components/score/nextmatch";
import Statistic from "../components/score/statistic";
import Ranking from "../components/score/ranking";
import PlayerBiography from "../components/score/playerbiography";
import LatestScore from "../components/score/latestscore";
import { useState } from "react";

const Score: NextPage = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleMouseEnter = () => {
    setShowSearch(true);
  };

  const handleMouseLeave = () => {
    setShowSearch(false);
  };
  return (
    <>
      {" "}
      <Flex direction='column' width='100%'>
        <Box
          height='10vh'
          zIndex={2}
          width='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          paddingX='4'
        >
          <Text
            fontSize='25px'
            fontWeight='bold'
            color={"gray-200"}
            ml={10}
            fontFamily={"arial"}
          >
            <Icon as={FaArrowLeftLong} boxSize={6} color='gray.600' mr={8} />
            Live Scores
          </Text>
          <HStack spacing={10} mr={5} onMouseLeave={handleMouseLeave}>
            <Box position='relative'>
              {showSearch ? (
                <InputGroup size='md' transition='all 0.6s ease'>
                  <Input
                    pr='2.3rem'
                    type='text'
                    placeholder='Search...'
                    background='white'
                    borderRadius={20}
                    border='none'
                    _placeholder={{ color: "gray.400" }}
                    autoFocus
                    onBlur={() => setShowSearch(false)}
                  />
                  <InputRightElement width='4.5rem'>
                    <Icon
                      as={FaTimes}
                      boxSize={6}
                      color='gray.600'
                      cursor='pointer'
                      onClick={() => setShowSearch(false)}
                    />
                  </InputRightElement>
                </InputGroup>
              ) : (
                <Icon
                  as={FaSearch}
                  boxSize={6}
                  color='gray.600'
                  cursor='pointer'
                  transition='0.5s'
                  onMouseEnter={handleMouseEnter}
                />
              )}
            </Box>
            <Box
              transition='transform 0.3s ease'
              _hover={{ transform: "rotate(20deg)" }}
            >
              <Icon
                as={FaCog}
                boxSize={6}
                color='gray.600'
                _hover={{ color: "red" }}
              />
            </Box>
            <Icon
              as={FaBell}
              boxSize={6}
              color='gray.600'
              _hover={{ color: "orange" }}
            />
            <Icon
              as={FaUser}
              boxSize={6}
              color='gray.600'
              _hover={{ color: "green" }}
            />
          </HStack>
        </Box>
        <Flex direction='column' height='90vh' padding={2}>
          <Flex direction='row' flex='1' padding={2} gap={4}>
            <Flex direction='column' flex='8' padding={4} gap={4} height='87vh'>
              <NextMatch />
              <Text
                fontSize='25px'
                fontWeight='bold'
                color={"#353E6C"}
                ml={2}
                fontFamily={"arial"}
                mt={2}
                mb={3}
              >
                Statistic
              </Text>

              <Statistic />
              <Text
                fontSize='25px'
                fontWeight='bold'
                color={"#353E6C"}
                ml={2}
                fontFamily={"arial"}
                mt={2}
                mb={3}
              >
                Ranking
              </Text>
              <Ranking />
            </Flex>

            <Flex direction='column' flex='5' padding={4} gap={4} height='87vh'>
              <Grid
                height='full'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(1, 1fr)'
                gap={4}
              >
                <PlayerBiography />
                <LatestScore />
              </Grid>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Score;
