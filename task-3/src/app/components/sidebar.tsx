/** @format */
"use client";

import React from "react";
import {
  Flex,
  Box,
  List,
  ListItem,
  VStack,
  Icon,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import {
  FaLock,
  FaGamepad,
  FaBroadcastTower,
  FaChartLine,
  FaTags,
  FaVideo,
  FaChartBar,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  color: any;
  bg: any;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  href,
  color,
  bg,
  children,
}) => (
  <ListItem
    padding='8px 16px'
    _hover={{ backgroundColor: "#E9EFFF", color: "#1657FF" }}
    cursor='pointer'
    color={color}
    bg={bg}
    fontSize={17}
    fontWeight={500}
    borderRadius={10}
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
          p={3}
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
                    loading='eager'
                  />
                </Box>
                <Text fontSize='3xl' ml={2} fontWeight='bold' color={"black"}>
                  Tennis
                </Text>
              </Flex>
            </Flex>
          </Box>
          <VStack align='center' spacing={5} p={5}>
            <List spacing={4} width='100%'>
              <NavItem icon={FaGamepad} href='' bg={""} color={""}>
                All Games
              </NavItem>
              <NavItem icon={FaBroadcastTower} href='#' bg={""} color={""}>
                Live Games{" "}
              </NavItem>
              <NavItem
                icon={FaChartLine}
                href='./score'
                bg={"#E9EFFF"}
                color={"#1657FF"}
              >
                Score
              </NavItem>
              <NavItem icon={FaTags} href='#' bg={""} color={""}>
                Categories
              </NavItem>
              <NavItem icon={FaVideo} href='#' bg={""} color={""}>
                Video
              </NavItem>
              <NavItem icon={FaChartBar} href='#' bg={""} color={""}>
                Statistic
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
                loading='eager'
              />

              <Text
                width={"80%"}
                textAlign={"center"}
                fontSize={16}
                mb={5}
       
                color={"black"}
              >
                Upgrade to
                <span
                  style={{
                    color: "#1657FF",
                    fontWeight: "600",
                    marginRight: "3px",
                    marginLeft: "3px",
                  }}
                >
                  PRO
                </span>
                for more features.
              </Text>

              <Button
                bg={"#1657FF"}
                p={"30px"}
                colorScheme='white'
                borderRadius={15}
                leftIcon={<FaLock />}
                _hover={{ bg: "blue" }}
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
