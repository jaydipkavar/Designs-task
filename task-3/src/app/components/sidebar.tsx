/** @format */
"use client";

import React from "react";
import {
  Flex,
  Box,
  List,
  ListItem,
  Link,
  VStack,
  Icon,
  Text,
  HStack,
  Button,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaLock,
  FaGamepad,
  FaBroadcastTower,
  FaChartLine,
  FaTags,
  FaVideo,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  color: any;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, href, color, children }) => (
  <ListItem
    padding='8px 16px'
    _hover={{ backgroundColor: "white", color: "#1657FF" }}
    cursor='pointer'
    color={color}
    fontSize={17}
    fontWeight={600}
  >
    <Link href={href}>
      <HStack>
        <Icon as={icon} mr={2} />
        <Text>{children}</Text>
      </HStack>
    </Link>
  </ListItem>
);

const NewSidebar = () => {
  return (
    <>
      <Flex>
        <Flex
          direction='column'
          width={"100%"}
          height='100vh'
          bg='gray.800'
          color='#B9C0DE'
          transition='left 0.3s'
          zIndex='docked'
          bgColor={"white"}
          p={2}
        >
          <Box padding='5'>
            <Flex alignItems='center' justifyContent='space-between'>
              <Flex alignItems='center'>
                <Box boxSize='50px' bg='teal.500' borderRadius='full' mr={3}>
                  <Image
                    src='/assets/logo.svg'
                    alt='Logo'
                    width={50}
                    height={50}
                  />
                </Box>
                <Text fontSize='xl' fontWeight='bold' color={"black"}>
                  Tennis
                </Text>
              </Flex>
            </Flex>
          </Box>
          <VStack align='center' spacing={5} p={5}>
            <List spacing={4} width='100%'>
              <NavItem icon={FaGamepad} href='#' color={""}>
                All Games
              </NavItem>
              <NavItem icon={FaBroadcastTower} href='#' color={""}>
                Live Games
              </NavItem>
              <NavItem icon={FaChartLine} href='/score' color={"#1657FF"}>
                Score
              </NavItem>
              <NavItem icon={FaTags} href='#' color={""}>
                Categories
              </NavItem>
              <NavItem icon={FaVideo} href='#' color={""}>
                Video
              </NavItem>
              <NavItem icon={FaChartBar} href='#' color={""}>
                Statics
              </NavItem>
            </List>
          </VStack>
          <Box
            flex='1'
            display='flex'
            alignItems='flex-end'
            justifyContent='center'
            padding='4'
          >
            <Box
              flex='1'
              display='flex'
              alignItems='center'
              flexDirection={"column"}
              justifyContent='end'
              padding='4'
              borderRadius={30}
              height={"38vh"}
              bg={"#EBEEFF"}
            >
              <Image
                src='/assets/lock.svg'
                alt='Logo'
                width={280}
                height={50}
              />

              <Text
                width={"80%"}
                textAlign={"center"}
                fontSize={16}
                mb={5}
                fontFamily={"arial"}
                color={"black"}
              >
                Upgrade to{" "}
                <span style={{ color: "#1657FF", fontWeight: "600" }}>PRO</span>
                for more features.
              </Text>

              <Button
                bg={"#1657FF"}
                p={"30px"}
                colorScheme='white'
                borderRadius={15}
                leftIcon={<FaLock />}
              >
                Upgrade to Pro
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default NewSidebar;
