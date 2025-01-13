import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { HorizontalScrollBar } from "../../components";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExercisesData();
  }, []);
  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
