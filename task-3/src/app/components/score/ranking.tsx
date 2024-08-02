/** @format */

"use client";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";

const Ranking = () => (
  <SimpleGrid
    columns={[2, null, 3]}
    spacing='5'
 
    color={"white"}
  >
    <Box
      position='relative'
      bg='#F44771'
      borderRadius='20px'
      height='auto'
      p={4}
      mb={5}
      overflow='hidden'
    >
      <Text fontSize={18} fontWeight={600} ml={2}>
        Singles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        fontWeight={600}
        fontSize={35}
        gap={2}
        ml={2}
      >
        18 <LuArrowBigUp />
      </Text>
      <Box
        position='absolute'
        top={-7}
        left={200}
        width='200px'
        height='100px'
        borderRadius='50px'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={1}
      />
      <Box
        position='absolute'
        top={8}
        right={-5}
        width='100px'
        height='100px'
        borderRadius='50%'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={0}
      />
      <Box
        position='absolute'
        top={-16}
        left={120}
        width='200px'
        height='100px'
        borderRadius='50px'
        transform='rotate(119deg)'
        backgroundColor='transpart'
        border='1px solid rgb(255,255,255,0.5)'
        zIndex={0}
      />
    </Box>

    <Box
      position='relative'
      bg='#FF9A3E'
      borderRadius='20px'
      height='auto'
      p={4}
      mb={5}
      overflow='hidden'
    >
      <Text fontSize={18} fontWeight={600} ml={2}>
        Doubles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        fontWeight={600}
        fontSize={35}
        gap={2}
        ml={2}
      >
        20 <LuArrowBigUp />
      </Text>
      <Box
        position='absolute'
        top={-7}
        left={200}
        width='200px'
        height='100px'
        borderRadius='50px'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={1}
      />
      <Box
        position='absolute'
        top={8}
        right={-5}
        width='100px'
        height='100px'
        borderRadius='50%'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={0}
      />
      <Box
        position='absolute'
        top={-20}
        left={100}
        width='200px'
        height='100px'
        borderRadius='50px'
        transform='rotate(90deg)'
        backgroundColor='transpart'
        border='1px solid rgb(255,255,255,0.5)'
        zIndex={0}
      />
    </Box>

    <Box
      position='relative'
      bg='#332A7C'
      borderRadius='20px'
      height='auto'
      p={4}
      mb={5}
      overflow='hidden'
    >
      <Text fontSize={18} fontWeight={600} ml={2}>
        Mixed Doubles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
        fontWeight={600}
        fontSize={35}
        gap={2}
        ml={2}
      >
        16 <LuArrowBigDown />
      </Text>
      <Box
        position='absolute'
        top={-7}
        left={200}
        width='200px'
        height='100px'
        borderRadius='50px'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={1}
      />
      <Box
        position='absolute'
        top={8}
        right={-5}
        width='100px'
        height='100px'
        borderRadius='50%'
        backgroundColor='rgb(255,255,255,0.2)'
        zIndex={0}
      />
      <Box
        position='absolute'
        top={-16}
        left={90}
        width='200px'
        height='100px'
        borderRadius='50px'
        transform='rotate(65deg)'
        backgroundColor='transpart'
        border='1px solid rgb(255,255,255,0.5)'
        zIndex={0}
      />
    </Box>
  </SimpleGrid>
);

export default Ranking;
