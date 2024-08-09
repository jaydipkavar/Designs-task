/** @format */

"use client";
import { NextPage } from "next";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import NextMatch from "../components/score/nextmatch";
import Ranking from "../components/score/ranking";
import PlayerBiography from "../components/score/playerbiography";
import LatestScore from "../components/score/latestscore";
import Header from "../components/header";
import Statistic from "../components/score/statistic";
import { useTheme } from "../themes/themescontext";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Score1: NextPage = () => {
  const { colorMode } = useTheme();
  return (
    <>
      <MotionFlex
        direction='column'
        width='100%'
        bg={colorMode === "light" ? "#F4F5F7" : "gray.700"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />

        <MotionFlex
          direction='row'
          flex='1'
          paddingX={4}
          paddingY={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MotionFlex
            direction='column'
            flex='8'
            padding={4}
            gap={4}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <NextMatch />

            <MotionText
              fontSize='25px'
              fontWeight='bold'
              color={colorMode === "light" ? "#353E6C" : "white"}
              ml={2}
              mt={2}
              mb={3}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Statistic
            </MotionText>
            <Statistic />

            <MotionText
              fontSize='25px'
              fontWeight='bold'
              color={colorMode === "light" ? "#353E6C" : "white"}
              ml={2}
              mt={2}
              mb={3}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Ranking
            </MotionText>
            <Ranking />
          </MotionFlex>

          <MotionFlex
            direction='column'
            flex='5'
            padding={4}
            gap={4}
            height='100%'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Grid height='full' gap={4}>
              <PlayerBiography content={""} height='70vh' />
              <LatestScore />
            </Grid>
          </MotionFlex>
        </MotionFlex>
      </MotionFlex>
    </>
  );
};

export default Score1;
