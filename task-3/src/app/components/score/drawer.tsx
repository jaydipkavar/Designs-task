/** @format */
"use client";
import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Image,
  Box,
  useDisclosure,
  Text,
  Switch,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { useTheme } from "@/app/themes/themescontext";
import { IoCloseCircle } from "react-icons/io5";

interface DrawerRightProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerRight: React.FC<DrawerRightProps> = ({ isOpen, onClose }) => {
  const { colorMode, toggleColorMode } = useTheme();

  // Handle switch changes to toggle color mode
  const handleSwitchChange = () => {
    toggleColorMode();
  };

  return (
    <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay
        bg={colorMode === "light" ? "rgb(0,0,0,0.6)" : "rgb(255,255,255,0.6)"}
      />
      <DrawerContent
        style={{
          backgroundColor: colorMode === "light" ? "white" : "#1A202C",
        }}
      >
        <DrawerHeader
          borderBottomWidth='1px'
          color={colorMode === "dark" ? "white" : "#1A202C"}
        >
          Theme Settings
          <IconButton
            aria-label='Close drawer'
            icon={<IoCloseCircle />}
            onClick={onClose}
            fontSize={"25px"}
            color={colorMode === "dark" ? "white" : "#1A202C"}
            position='absolute'
            right='1rem'
            top='0.8rem'
            bg={"transparent"}
            _hover={"none"}
          />
        </DrawerHeader>
        <DrawerBody>
          <Stack spacing={6} align='center' p={4}>
            <Box textAlign='center'>
              <Image
                src='/assets/light.png'
                alt='Light Theme Image'
                objectFit='cover'
                border={
                  colorMode === "light" ? "3px solid #7f26de" : "3px solid"
                }
              />
              <Stack direction='row' align='center' spacing={4} mt={4}>
                <Switch
                  size='md'
                  isChecked={colorMode === "light"}
                  onChange={handleSwitchChange}
                />
                <Text color={colorMode === "dark" ? "white" : "#1A202C"}>
                  Light Mode
                </Text>
              </Stack>
            </Box>

            <Box textAlign='center'>
              <Image
                src='/assets/dark.png'
                alt='Dark Theme Image'
                objectFit='cover'
                border={
                  colorMode === "dark" ? "3px solid #7f26de" : "3px solid"
                }
              />
              <Stack direction='row' align='center' spacing={4} mt={4}>
                <Switch
                  size='md'
                  isChecked={colorMode === "dark"}
                  onChange={handleSwitchChange}
                />
                <Text color={colorMode === "dark" ? "white" : "#1A202C"}>
                  Dark Mode
                </Text>
              </Stack>
            </Box>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerRight;
