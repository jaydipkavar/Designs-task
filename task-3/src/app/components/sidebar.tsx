/** @format */
"use client";

import React from "react";
import {
  Flex,
  Box,
  List,
  VStack,
  Icon,
  Text,
  HStack,
  Button,
  ListItem,
} from "@chakra-ui/react";
import {
  FaLock,
  FaGamepad,
  FaBroadcastTower,
  FaChartLine,
  FaVideo,
  FaChartBar,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../themes/themescontext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  color: any;
  bg: any;
  children: React.ReactNode;
}

const MotionBox = motion(Box);
const MotionListItem = motion(ListItem);

const NavItem: React.FC<NavItemProps> = ({
  icon,
  href,
  color,
  bg,
  children,
}) => (
  <MotionListItem
    padding='8px 16px'
    _hover={{ backgroundColor: "#E9EFFF", color: "#1657FF" }}
    cursor='pointer'
    color={color}
    bg={bg}
    fontSize={17}
    fontWeight={500}
    borderRadius={10}
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Link href={href}>
      <HStack>
        <Icon as={icon} mr={2} />
        <Text>{children}</Text>
      </HStack>
    </Link>
  </MotionListItem>
);

const NewSidebar = () => {
  const { colorMode } = useTheme();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <Flex>
        <Flex
          direction='column'
          width={"100%"}
          height='100vh'
          bg={colorMode === "light" ? "F4F5F7" : "gray.800"}
          color='#B9C0DE'
          transition='left 0.3s'
          zIndex='docked'
          p={3}
        >
          <MotionBox
            padding='5'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
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
                <Text
                  fontSize='3xl'
                  ml={2}
                  fontWeight='bold'
                  color={colorMode === "light" ? "black" : "white"}
                >
                  Tennis
                </Text>
              </Flex>
            </Flex>
          </MotionBox>

          <MotionBox
            as={VStack}
            align='center'
            spacing={5}
            p={5}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <List spacing={4} width='100%'>
              <NavItem icon={FaGamepad} href='' bg={""} color={""}>
                All Games
              </NavItem>
              <NavItem icon={FaBroadcastTower} href='#' bg={""} color={""}>
                Live Games
              </NavItem>
              <NavItem
                icon={FaChartLine}
                href='./score1'
                bg={isActive("/score1") ? "#E9EFFF" : "transparent"}
                color={isActive("/score1") ? "#1657FF" : ""}
              >
                Score 1
              </NavItem>
              <NavItem
                icon={FaChartLine}
                href='/score2'
                bg={isActive("/score2") ? "#E9EFFF" : "transparnt"}
                color={isActive("/score2") ? "#1657FF" : ""}
              >
                Score 2
              </NavItem>
              <NavItem icon={FaVideo} href='#' bg={""} color={""}>
                Video
              </NavItem>
              <NavItem icon={FaChartBar} href='#' bg={""} color={""}>
                Statistic
              </NavItem>
            </List>
          </MotionBox>

          <MotionBox
            flex='1'
            display='flex'
            alignItems='flex-end'
            justifyContent='center'
            padding='4'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
          </MotionBox>
        </Flex>
      </Flex>
    </>
  );
};

export default NewSidebar;
