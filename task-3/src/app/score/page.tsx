/** @format */

"use client";
import { NextPage } from "next";
import { Flex, Grid, GridItem, Box, SimpleGrid } from "@chakra-ui/react";
import NewSidebar from "../components/newsidebar";
import Sidebar from "../components/sidebar";

const Score: NextPage = () => {
  return (
    <Flex width={"100%"}>
      <Box width='18%' bg={"pink"}>
        <Sidebar />
      </Box>
      <Box bg={"red"} width={"85%"}>
        {" "}
        <Flex direction='column' width='100%' padding={2}>
          <Box height='7vh' zIndex={2} width='100%' bg='gray.200'>
            {/* Header can go here */}
          </Box>
          <Flex direction='column' height='93vh' padding={2}>
            <Flex direction='row' flex='1' padding={2} gap={4}>
              <Flex
                direction='column'
                flex='7'
                padding={4}
                gap={4}
                height='90vh'
              >
                <Box
                  height='30vh'
                  bg='blue.100'
                  borderRadius='50px'
                  padding={4}
                ></Box>
                <Flex direction='row' height='56vh' gap={4}>
                  <Box
                    flex='1'
                    bg='yellow.500'
                    borderRadius='50px'
                    padding={4}
                    height='100%'
                  ></Box>
                  <Box
                    flex='1'
                    bg='purple.100'
                    borderRadius='50px'
                    padding={4}
                    height='100%'
                  ></Box>
                </Flex>
                <SimpleGrid columns={[2, null, 3]} spacing='4'>
                  <Box bg='tomato' borderRadius='50px' height='100px'></Box>
                  <Box bg='tomato' borderRadius='50px' height='100px'></Box>
                  <Box bg='tomato' borderRadius='50px' height='100px'></Box>
                </SimpleGrid>
              </Flex>

              {/* Right Side */}
              <Flex
                direction='column'
                flex='5'
                padding={4}
                gap={4}
                height='90vh'
              >
                <Grid
                  height='full'
                  templateRows='repeat(2, 1fr)'
                  templateColumns='repeat(1, 1fr)'
                  gap={4}
                >
                  <GridItem
                    colSpan={1}
                    height='55vh'
                    bg='tomato'
                    borderRadius='50px'
                  ></GridItem>

                  <GridItem
                    colSpan={1}
                    height='30vh'
                    bg='tomato'
                    borderRadius='50px'
                  >
                    {/* Content for the smaller tomato-colored box */}
                  </GridItem>
                </Grid>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Score;
