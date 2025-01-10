import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import images from "../../constants/images";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position={"relative"}
      p={"20px"}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"26px"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography lineHeight={"35px"} fontSize={"22px"} mb={5}>
        Check out the most effective exercises.
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ mb: "20px", backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"200px"}
      >
        Exercises
      </Typography>
      <img src={images.banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
