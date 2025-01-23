import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const SvgImage = () => (
  <svg
    width="400"
    height="400"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ maxWidth: "100%", height: "auto" }}
  >
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      strokeWidth="3"
      fill="lightblue"
    />
    <circle cx="50" cy="50" r="20" fill="darkblue" />
  </svg>
);

const Section1 = () => {
  return (
    <motion.section
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        initial={{ x: "-100px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", ease: "easeInOut" }}
      >
        <Typography
          variant="h1"
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
        >
          Section 1
        </Typography>
        <Typography
          variant="body1"
          style={{
            fontSize: "1.25rem",
            color: "#555",
            marginTop: "20px",
            lineHeight: "1.6",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada, lorem et egestas malesuada, lorem eros tincidunt justo, nec
          tincidunt leo lacus vel nunc. Nulla facilisi. Vestibulum at urna id
          arcu elementum vehicula. Curabitur tincidunt, libero at interdum
          malesuada, nulla nisl volutpat nunc, in scelerisque odio quam at
          tortor.
        </Typography>
      </motion.div>

      <Box
        style={{
          width: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <SvgImage />
        </motion.div>
      </Box>
    </motion.section>
  );
};

export default Section1;
