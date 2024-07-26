/** @format */

"use client";

import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  Text,
  HStack,
  Icon,
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
import { ReactNode } from "react";
import Image from "next/image"; // Import the Image component from next/image
import Link from "next/link"; // Import the Link component from next/link

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ icon, href, children }) => (
  <ListItem
    padding='8px 16px'
    _hover={{ backgroundColor: "teal.600", color: "white" }}
    cursor='pointer'
  >
    <Link href={href}>
      <HStack>
        <Icon as={icon} />
        <Text>{children}</Text>
      </HStack>
    </Link>
  </ListItem>
);

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme='teal'
        onClick={onOpen}
        variant='outline'
        margin={5}
        fontSize={30}
        padding={5}
      >
        {<FaBars />}
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
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
                <Text fontSize='xl' fontWeight='bold'>
                  Tennis
                </Text>
              </Flex>
              <Button onClick={onClose} variant='ghost'>
                <Icon as={FaTimes} w={6} h={6} />
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack align='start' spacing={4}>
              <List spacing={2} width='100%'>
                <NavItem icon={FaGamepad} href='/allgames'>
                  All Games
                </NavItem>
                <NavItem icon={FaBroadcastTower} href='/livegames'>
                  Live Games
                </NavItem>
                <NavItem icon={FaChartLine} href='/score'>
                  Score
                </NavItem>
                <NavItem icon={FaTags} href='/categories'>
                  Categories
                </NavItem>
                <NavItem icon={FaVideo} href='/video'>
                  Video
                </NavItem>
                <NavItem icon={FaChartBar} href='/statics'>
                  Statics
                </NavItem>
              </List>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Box width='100%' textAlign='center'>
              <Button
                colorScheme='teal'
                variant='outline'
                leftIcon={<FaLock />}
              >
                Upgrade to Pro
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
