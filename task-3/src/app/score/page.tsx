/** @format */

"use client";
import { NextPage } from "next";
import { Flex, Grid, Text } from "@chakra-ui/react";

import NextMatch from "../components/score/nextmatch";
import Statistic from "../components/score/statistic";
import Ranking from "../components/score/ranking";
import PlayerBiography from "../components/score/playerbiography";
import LatestScore from "../components/score/latestscore";
import Header from "../components/header";
import NewLatestScore from "../components/score/newlatescore";
import NewNextMatch from "../components/score/newnextmatch";
import { useTheme } from "../themes/themescontext";

const Score: NextPage = () => {
  const { colorMode } = useTheme();
  return (
    <>
      <Flex
        direction='column'
        width='100%'
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
      >
        <Header />

        <Flex direction='row' flex='1' paddingX={4} paddingY={2}>
          <Flex direction='column' flex='8' padding={4} gap={4}>
            {/* <NextMatch /> */}

            {/* <LatestScore /> */}
            <Text
              fontSize='25px'
              fontWeight='bold'
              color={colorMode === "light" ? "#353E6C" : "white"}
              ml={2}
              mt={2}
              mb={3}
            >
              Latest Score
            </Text>
            <NewLatestScore />

            <Text
              fontSize='25px'
              fontWeight='bold'
              color={colorMode === "light" ? "#353E6C" : "white"}
              ml={2}
              mt={2}
              mb={3}
            >
              Statistic
            </Text>
            <Statistic />

            <Text
              fontSize='25px'
              fontWeight='bold'
              color={colorMode === "light" ? "#353E6C" : "white"}
              ml={2}
              mt={2}
              mb={3}
            >
              Ranking
            </Text>
            <Ranking />
          </Flex>

          <Flex direction='column' flex='5' padding={4} gap={4} height='100%'>
            <Grid height='full' gap={4}>
              <PlayerBiography />
              {/* <LatestScore /> */}
              {/* <NewNextMatch /> */}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Score;
