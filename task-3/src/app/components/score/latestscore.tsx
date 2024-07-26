/** @format */

// components/LatestScore.tsx
import { Box, Text } from "@chakra-ui/react";

const LatestScore = () => (
  <Box width='60%' bg='gray.100' p={4} borderRadius='md'>
    <Text fontSize='lg' fontWeight='bold'>
      Latest Score
    </Text>
    {/* Add latest score details here */}
  </Box>
);

export default LatestScore;
