/** @format */
"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const NextMatch = () => {
  return (
    <>
      <Box bg='white' borderRadius='30px' padding={6}>
        <Box>
          {" "}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            {" "}
            <Text fontSize='23px' fontWeight='bold' color={"#353E6C"} ml={3}>
              Your Next Match
            </Text>
            <Text fontSize='15px' fontWeight='bold' color={"#BACCFD"} mr={3}>
              18 January 2024
            </Text>
          </Box>
          {/* <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={10}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text
                fontSize='25px'
                fontWeight='bold'
                color={"gray-200"}
                mr={10}
              >
                Naomi O.
              </Text>

              <Image
                src='/assets/img.svg'
                alt='Logo'
                width={80}
                height={80}
                loading='eager'
              />
            </Box>
            <Box fontSize={80} color={"#1657FF"}>
              <Box
                height={"10px"}
                width={"10px"}
                bg={"#1657FF"}
                borderRadius={50}
              ></Box>
              <Box
                height={"10px"}
                width={"10px"}
                bg={"#1657FF"}
                borderRadius={50}
                mt={5}
              ></Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src='/assets/img1.svg'
                alt='Logo'
                loading='eager'
                width={80}
                height={80}
              />
              <Text
                fontSize='25px'
                fontWeight='bold'
                color={"gray-200"}
                ml={10}
              >
                Anindita R.
              </Text>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default NextMatch;
