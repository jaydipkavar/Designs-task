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

const LatestScore = () => (
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
      <Text fontSize='25px'>Latest Scores</Text>
      <Spacer />
      <Text fontSize='18px' color='#276BF0'>
        View All
      </Text>
    </Flex>

    <Tabs mb={4} defaultIndex={0}>
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
      <TabPanels>
        <TabPanel>
          <Box
            mb={4}
            py={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
            <Box ml={2}>
              <FaRegStar color='orange' fontSize={20} />
            </Box>
          </Box>
          <Box mt={5} fontSize={18} >
            <Flex align='center' mt={1}>
              <Text flex='1'>Aninduta R. (IDN)</Text>
              <Flex
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
                marginRight={12}
              >
                <Text fontWeight='bold'>2</Text>
                <Spacer w={2} />
                <Text fontWeight='500'>6</Text>
                <Spacer w={2} />
                <Text fontWeight='500'>6</Text>
              </Flex>
              <Text
                color='#FFBB38'
                bg={"#FFF5D9"}
                p={2}
                fontWeight='bold'
                width={"15%"}
                textAlign={"center"}
                borderRadius={10}
              >
                Win
              </Text>
            </Flex>
            <Flex align='center'  mt={1}>
              <Text flex='1' fontWeight='500'>
                Naomi O. (JPN)
              </Text>
              <Flex
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
                marginRight={12}
              >
                <Text fontWeight='bold'>0</Text>
                <Spacer w={2} />
                <Text fontWeight='500'>3</Text>
                <Spacer w={2} />
                <Text fontWeight='500'>1</Text>
              </Flex>
              <Text
                color='#FFBB38'
                bg={"#FFF5D9"}
                fontWeight='bold'
                width={"15%"}
                textAlign={"center"}
                borderRadius={10}
              ></Text>
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

export default LatestScore;
