/** @format */
"use client";
import { Box, Text, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import NewNextMatch from "./newnextmatch";
import { useTheme } from "@/app/themes/themescontext";
const PlayerBiography = () => {
  const { colorMode } = useTheme();
  return (
    <>
      <GridItem
        colSpan={1}
        height='auto'
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "black" : "white"}
        borderRadius='50px'
        overflow={"hidden"}
        position={"relative"}
      >
        <Box height='25vh' position='relative' overflow='hidden'>
          <Box
            color='white'
            fontWeight='bold'
            zIndex={1}
            padding='20px'
            position={"absolute"}
            ml={5}
          >
            <Text width={"60%"} fontSize={"25px"} mt={7}>
              Anindita Rahmawati
            </Text>
            <Text display='flex' alignItems='center' mt={5} fontSize={18}>
              <Image
                src='/assets/flag.svg'
                alt='Flag'
                width={24}
                height={24}
                loading='eager'
              />
              <span style={{ marginLeft: "8px" }}>Indonesia</span>{" "}
            </Text>
          </Box>
          <Image
            src='/assets/wave.svg'
            alt='Wave Background'
            width={100}
            height={100}
            objectFit='cover'
            loading='eager'
            style={{
              position: "absolute",
              bottom: "-70px",
              height: "48vh",
              width: "100%",
              zIndex: "0",
              marginTop: "50px",
            }}
          />
        </Box>
        <Box
          width={"40%"}
          ml={10}
          mt={2}
          fontWeight={"bold"}
          letterSpacing={0.5}
        >
          <Text fontSize='xl' mb={2}>
            Biography
          </Text>

          <Image
            src='/assets/bioimg.svg'
            alt='Logo'
            width={70}
            height={70}
            loading='eager'
          />

          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              marginTop: 15,
              lineHeight: "2",
            }}
          >
            <li>Age : 27</li>
            <li>Birth : 24 - 02 - 1993</li>
            <li>Sex : Women</li>
            <li>WTA : 10</li>
          </ul>
        </Box>
        <Box width={"40%"} ml={10} mt={4} mb={15}>
          <Text fontSize='xl' mb={2} fontWeight={"bold"}>
            Social Media
          </Text>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={4}
            color={"#BACCFD"}
            fontSize={"25"}
            mt={4}
            ml={2}
          >
            <FaTwitter className='Tiwtter' />
            <FaFacebookF className='Facebook' />
          </Box>
        </Box>
        <Box marginTop={"70PX"} fontSize={15}>
          {" "}
          <hr></hr>
        </Box>
        <NewNextMatch />
        <Box position={"absolute"} top={0} right={-5}>
          <Image
            src='/assets/woman.svg'
            alt='Logo'
            width={350}
            height={350}
            style={{ height: "auto", width: "auto" }}
            loading='eager'
          />
        </Box>
      </GridItem>
    </>
  );
};

export default PlayerBiography;
