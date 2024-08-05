/** @format */
"use client";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const NewNextMatch = () => {
  return (
    <>
      <Box bg='white' borderRadius='50px' padding={10} mt={5}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Text fontSize='30px' fontWeight='bold' color={"#353E6C"} ml={3}>
            Next Match
          </Text>
          <Text fontSize='15px' fontWeight='bold' color={"#BACCFD"} mr={3}>
            18 January 2024
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          mt={6}
        >
          <Box display={"flex"} mt={2} flexDirection={"column"} alignItems={"center"}>
            <Image
              src='/assets/img.svg'
              alt='Naomi O.'
              width={120}
              height={120}
              loading='eager'
            />
            <Text fontSize='25px' fontWeight='bold' mt={5}>
              Naomi O.
            </Text>
            <Text fontSize='18px'  color={"#A0AEC0"} mt={3}>
              Japan
            </Text>
          </Box>
          <Box
         mt={-10}
            color={"#1657FF"}
          >
            <Box
              height={"10px"}
              width={"10px"}
              bg={"#1657FF"}
              borderRadius={50}
              mb={5}
            ></Box>
            <Box
              height={"10px"}
              width={"10px"}
              bg={"#1657FF"}
              borderRadius={50}
            ></Box>
          </Box>
          <Box display={"flex"} mt={2} flexDirection={"column"} alignItems={"center"}>
            <Image
              src='/assets/img1.svg'
              alt='Anindita R.'
              width={120}
                          height={120}
                          
              loading='eager'
            />
            <Text fontSize='25px' fontWeight='bold' mt={5}>
              Anindita R.
            </Text>
            <Text fontSize='18/px' color={"#A0AEC0"} mt={3}>
              Indonesia
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewNextMatch;
