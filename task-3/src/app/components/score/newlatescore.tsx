/** @format */

"use client";
import {
  Box,
  GridItem,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { FaRegStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const NewLatestScore = () => (
  <GridItem
    colSpan={1}
    height='auto'
    bg='white'
    borderRadius='50px'
    px={10}
    py={1}
    fontWeight='bold'
  >
    <Flex mb={4} mt={7}>
      <Tabs variant='unstyled'>
        <TabList borderBottom={"none"} color={"#BACCFD"}>
          <Tab
            _selected={{
              bg: "#DCFAF8",
              color: "#16DBCC",
              borderRadius: "8px",
              borderBottom: "none",
            }}
            _focus={{ boxShadow: "none" }}
            p={3}
            borderRadius='8px'
          >
            Singles
          </Tab>
          <Tab
            _selected={{
              bg: "#DCFAF8",
              color: "#16DBCC",
              borderRadius: "8px",
            }}
            _focus={{ boxShadow: "none" }}
            p={3}
            borderRadius='8px'
          >
            Doubles
          </Tab>
          <Tab
            _selected={{
              bg: "#DCFAF8",
              color: "#16DBCC",
              borderRadius: "8px",
            }}
            _focus={{ boxShadow: "none" }}
            p={3}
            borderRadius='8px'
          >
            Mixed Doubles
          </Tab>
        </TabList>
      </Tabs>
      <Spacer />
      <Text fontSize='18px' color='#276BF0'>
        View All
      </Text>
    </Flex>

    <Tabs mb={4} defaultIndex={0}>
      <TabPanels>
        <TabPanel>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            borderRadius={10}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FiUser color='red' fontSize={20} />
              <Text fontSize='md' ml={3} fontWeight={"540"}>
                WTA-SINGLES: Australia Open, Hard
              </Text>
            </Box>
            <Box ml={10}>
              <FaRegStar color='orange' fontSize={20} />
            </Box>
          </Box>
          <Box mt={5} fontSize={18}>
            <Flex justifyContent='space-between' borderRadius={10}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                gap={5}
                borderRadius={15}
                height={100}
                width={"auto"}
              >
                <Text>Aninduta R. (IDN)</Text>
                <Text fontWeight={500}>Naomi O. (JPN)</Text>
              </Box>
              <Flex justifyContent={"center"} alignItems={"start3"} gap={5}>
                <Box
                  textAlign='center'
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap={5}
                  bg='#BACCFD'
                  p={2}
                  borderRadius={15}
                  height={100}
                  width={55}
  
                >
                  <Text>20</Text>
                  <Text>50</Text>
                </Box>
                <Box
                  textAlign='center'
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap={5}
                  bg='#EDF2FF'
                  p={2}
                  borderRadius={15}
                  height={100}
                  width={55}
                  fontWeight={500}
                >
                  <Text>6</Text>
                  <Text>3</Text>
                </Box>
                <Box
                  textAlign='center'
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap={5}
                  bg='#EDF2FF'
                  p={2}
                  borderRadius={15}
                  height={100}
                  fontWeight={500}
                  width={55}
                >
                  <Text>6</Text>
                  <Text>1</Text>
                </Box>
                <Box
                  textAlign='center'
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  gap={5}
                  bg='#EDF2FF'
                  p={2}
                  borderRadius={15}
                  height={100}
                  width={55}
                  fontWeight={500}
                >
                  <Text>6</Text>
                  <Text>1</Text>
                </Box>
                <Box ml={70}>
                  <Text
                    color='#FFBB38'
                    bg={"#FFF5D9"}
                    px={6}
                    py={2}
                    fontWeight='bold'
                    textAlign={"center"}
                    borderRadius={10}
                  >
                    Win
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </TabPanel>
        <TabPanel>
          <Text textAlign={"center"}>No Data Found</Text>
        </TabPanel>
        <TabPanel>
          <Text textAlign={"center"}>No Data Found</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </GridItem>
);

export default NewLatestScore;
