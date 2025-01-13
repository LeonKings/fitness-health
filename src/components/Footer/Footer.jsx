import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import images from "../../constants/images";

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4">
    <Stack
      gap="30px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="20px"
    >
      <img
        src={images.logo1}
        alt="logo"
        style={{ width: "160px", height: "100px" }}
      />
    </Stack>
    <Typography
      variant="h4"
      sx={{ fontSize: { lg: "14px", xs: "10px" } }}
      mt="25px"
      textAlign="center"
      pb="20px"
    >
      2025. Fitness Health
    </Typography>
  </Box>
);

export default Footer;
