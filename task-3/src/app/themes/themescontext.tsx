/** @format */

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface ThemeContextType {
  colorMode: string;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [colorMode, setColorMode] = useState<string>("light");

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ChakraProvider theme={theme}>
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        {children}
      </ThemeContext.Provider>
    </ChakraProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
