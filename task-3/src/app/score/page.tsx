/** @format */

"use client";
import { NextPage } from "next";
import { Flex, Grid, GridItem, Box, SimpleGrid } from "@chakra-ui/react";
import Sidebar from "@/app/components/sidebar";

const Score: NextPage = () => {
  return (
    <>
      <Box h={"7vh"}>
        <Sidebar />
      </Box>
      <Flex direction='column' h='93vh' p={2}>
        <Flex direction='row' flex='1' p={2} gap={4}>
          <Flex direction='column' flex='7' p={4} gap={4} h='90vh'>
            <Box h='30vh' bg='blue.100' borderRadius='50px' p={4}></Box>
            <Flex direction='row' h='56vh' gap={4}>
              <Box
                flex='1'
                bg='yellow.500'
                borderRadius='50px'
                p={4}
                h='100%'
              ></Box>
              <Box
                flex='1'
                bg='purple.100'
                borderRadius='50px'
                p={4}
                h='100%'
              ></Box>
            </Flex>
            <SimpleGrid columns={[2, null, 3]} spacing='4'>
              <Box bg='tomato' borderRadius='50px' height='100px'></Box>
              <Box bg='tomato' borderRadius='50px' height='100px'></Box>
              <Box bg='tomato' borderRadius='50px' height='100px'></Box>
            </SimpleGrid>
          </Flex>

          {/* Right Side */}
          <Flex direction='column' flex='5' p={4} gap={4} h='90vh'>
            <Grid
              h='full'
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(1, 1fr)'
              gap={4}
            >
              <GridItem
                colSpan={1}
                h='55vh'
                bg='tomato'
                borderRadius='50px'
              ></GridItem>

              <GridItem colSpan={1} h='30vh' bg='tomato' borderRadius='50px'>
                {/* Content for the smaller tomato-colored box */}
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Score;
