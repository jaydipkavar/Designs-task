/** @format */

"use client";
import { NextPage } from "next";

import { Flex, Heading } from "@chakra-ui/react";
import Sidebar from "@/app/components/sidebar";

const Categories: NextPage = () => {
  return (
    <>
      {" "}
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
        <h1>Categories</h1>
      </Flex>
    </>
  );
};

export default Categories;
