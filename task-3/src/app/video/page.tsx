/** @format */

"use client";
import { NextPage } from "next";

import { Flex, Heading } from "@chakra-ui/react";
import Sidebar from "@/app/components/sidebar";

const Video: NextPage = () => {
  return (
    <>
      {" "}
      <Sidebar />
      <Flex direction='column' flex='1' p={4}>
        <Heading as='h1' mb={4}>
          Video
        </Heading>
        <p>
          Here is a list of all games available in the Tennis app. Add relevant
          content here.
        </p>
      </Flex>
    </>
  );
};

export default Video;
