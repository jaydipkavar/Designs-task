/** @format */
"use client";
import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBell, FaCog, FaSearch, FaTimes, FaUser } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMouseEnter = () => {
    setShowSearch(true);
  };

  const handleMouseLeave = () => {
    setShowSearch(false);
  };

  return (
    <>
      {" "}
      <Box
        height='10vh'
        zIndex={2}
        width='100%'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p={6}
        position={"sticky"}
        top={0}
        className={`header ${scrolled ? "scrolled" : ""}`}
      >
        <Text fontSize='25px' fontWeight='bold' color={"gray-200"} ml={8}>
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
    </>
  );
};

export default Header;
