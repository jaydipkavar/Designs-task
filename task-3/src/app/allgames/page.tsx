/** @format */
"use client";
import { NextPage } from "next";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import Sidebar from "../components/sidebar";

const AllGames: NextPage = () => {
  return (
    <>
      <Sidebar />
      <Flex
        direction='column'
        p={4}
        height='100vh'
        overflowY='auto'
        bg='gray.100'
        display={"flex"}
        alignItems={"center"}
      >
        <Card align='center' h={"60vh"} w={"80%"}>
          <h1>All Games</h1>
        </Card>
      </Flex>
    </>
  );
};

export default AllGames;
