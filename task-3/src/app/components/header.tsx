/** @format */
"use client";
import {
  Box,
  Button,
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
import { useTheme } from "../themes/themescontext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useTheme();

  const backgroundColor = scrolled
    ? colorMode === "light"
      ? "rgba(255, 255, 255, 0.6)"
      : "gray-600"
    : "transparent";

  const boxShadow = scrolled
    ? colorMode === "light"
      ? "-1px 16px 14px -8px rgba(218, 218, 218, 0.68)"
      : "-1px 16px 14px -8px rgba(0, 0, 0, 0.5)"
    : "none";
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
        position='sticky'
        top={0}
        transition='background-color 0.3s ease'
        backgroundColor={backgroundColor}
        backdropFilter={scrolled ? "blur(15px)" : "none"}
        boxShadow={boxShadow}
      >
        <Text
          fontSize='25px'
          fontWeight='bold'
          color={colorMode === "light" ? "gray.600" : "white"}
          ml={8}
        >
          <Icon
            as={FaArrowLeftLong}
            boxSize={6}
            color={colorMode === "light" ? "gray.600" : "white"}
            mr={8}
          />
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
                color={colorMode === "light" ? "gray.600" : "white"}
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
              color={colorMode === "light" ? "gray.600" : "white"}
              _hover={{ color: "red" }}
            />
          </Box>
          <Box onClick={toggleColorMode} display='flex' alignItems='center'>
            <Icon
              as={colorMode === "light" ? MdDarkMode : MdLightMode}
              boxSize={6}
              color={colorMode === "light" ? "gray.600" : "white"}
            />
          </Box>
          <Icon
            as={FaBell}
            boxSize={6}
            color={colorMode === "light" ? "gray.600" : "white"}
            _hover={{ color: "orange" }}
          />
          <Icon
            as={FaUser}
            boxSize={6}
            color={colorMode === "light" ? "gray.600" : "white"}
            _hover={{ color: "green" }}
          />
        </HStack>
      </Box>
    </>
  );
};

export default Header;
