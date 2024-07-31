/** @format */
"use client";
import { Box, Text, GridItem } from "@chakra-ui/react";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const PlayerBiography = () => {
  return (
    <>
      <GridItem
        colSpan={1}
        height='68vh'
        bg='white'
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
              <Image src='/assets/flag.svg' alt='Flag' width={24} height={24} />
              <span style={{ marginLeft: "8px" }}>Indonesia</span>{" "}
            </Text>
          </Box>
          <Image
            src='/assets/wave.svg'
            alt='Wave Background'
            width={100}
            height={100}
            objectFit='cover'
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

          <Image src='/assets/bioimg.svg' alt='Logo' width={70} height={70} />

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
        <Box width={"40%"} ml={10} mt={4}>
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
            <FaTwitter />
            <FaFacebookF />
          </Box>
        </Box>
        <Box position={"absolute"} top={0} right={-5}>
          <Image src='/assets/woman.svg' alt='Logo' width={320} height={320} />
        </Box>
      </GridItem>
    </>
  );
};

export default PlayerBiography;
