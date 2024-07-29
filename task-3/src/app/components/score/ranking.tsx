/** @format */

// components/Ranking.tsx
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { LuArrowBigUp, LuArrowBigDown } from "react-icons/lu";

const Ranking = () => (
  <SimpleGrid
    columns={[2, null, 3]}
    spacing='5'
    fontFamily={"arial"}
    color={"white"}
  >
    <Box bg='#F44771' borderRadius='20px' height='100px' p={4} mb={5}>
      <Text fontSize={18} fontWeight={600} ml={2}>
        Singles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"cstart"}
        alignItems={"center"}
        fontWeight={800}
        fontSize={35}
        gap={2}
        ml={2}
      >
        18 <LuArrowBigUp />
      </Text>
    </Box>
    <Box bg='#FF9A3E' borderRadius='20px' height='100px' p={4}>
      <Text fontSize={18} fontWeight={600} ml={2}>
        Doubles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"cstart"}
        alignItems={"center"}
        fontWeight={800}
        fontSize={35}
        gap={2}
        ml={2}
      >
        20 <LuArrowBigUp />
      </Text>
    </Box>
    <Box bg='#332A7C' borderRadius='20px' height='100px' p={4}>
      {" "}
      <Text fontSize={18} fontWeight={600} ml={2}>
        Mixed Doubles
      </Text>
      <Text
        display={"flex"}
        justifyContent={"cstart"}
        alignItems={"center"}
        fontWeight={800}
        fontSize={35}
        gap={2}
        ml={2}
      >
        16 <LuArrowBigDown />
      </Text>
    </Box>
  </SimpleGrid>
);

export default Ranking;
