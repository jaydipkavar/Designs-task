import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Blog = () => {
  const boxContent = [
    { title: "Box 1", text: "This is the first box." },
    { title: "Box 2", text: "This is the second box." },
    { title: "Box 3", text: "This is the third box." },
    { title: "Box 4", text: "This is the fourth box." },
    { title: "Box 5", text: "This is the fifth box." },
    { title: "Box 6", text: "This is the sixth box." },
    { title: "Box 7", text: "This is the seventh box." },
    { title: "Box 8", text: "This is the eighth box." },
    { title: "Box 9", text: "This is the ninth box." },
    { title: "Box 10", text: "This is the tenth box." },
    { title: "Box 11", text: "This is the eleventh box." },
    { title: "Box 12", text: "This is the twelfth box." },
    { title: "Box 13", text: "This is the thirteenth box." },
    { title: "Box 14", text: "This is the fourteenth box." },
    { title: "Box 15", text: "This is the fifteenth box." },
    { title: "Box 16", text: "This is the sixteenth box." },
    { title: "Box 17", text: "This is the seventeenth box." },
    { title: "Box 18", text: "This is the eighteenth box." },
    { title: "Box 19", text: "This is the nineteenth box." },
    { title: "Box 20", text: "This is the twentieth box." },
    { title: "Box 21", text: "This is the twenty-first box." },
    { title: "Box 22", text: "This is the twenty-second box." },
    { title: "Box 23", text: "This is the twenty-third box." },
    { title: "Box 24", text: "This is the twenty-fourth box." },
    { title: "Box 25", text: "This is the twenty-fifth box." },
    { title: "Box 26", text: "This is the twenty-sixth box." },
    { title: "Box 27", text: "This is the twenty-seventh box." },
    { title: "Box 28", text: "This is the twenty-eighth box." },
    { title: "Box 29", text: "This is the twenty-ninth box." },
    { title: "Box 30", text: "This is the thirtieth box." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Grid2
        container
        spacing={2}
        display={"flex"}
        flexDirection="column"
        justifyContent="center"
        alignItems={"center"}
        padding={5}
        width="100%"
      >
        {boxContent.map((box, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index} width="60%">
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -200 : 200,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              // animate={{
              //   opacity: 1,
              //   x: 0,
              // }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: false }}
            >
              <Box
                p={3}
                border={1}
                borderColor="grey.300"
                borderRadius={2}
                boxShadow={3}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="50px"
                bgcolor={`hsl(${(index * 30) % 360}, 80%, 60%)`}
              >
                <Typography variant="h6" gutterBottom>
                  {box.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {box.text}
                </Typography>
              </Box>
            </motion.div>
          </Grid2>
        ))}
      </Grid2>
    </motion.div>
  );
};

export default Blog;
