import React, { useState } from "react";
import { Box } from "@mui/material";
import { HeroBanner, SearchExercises, Exercises } from "../../components";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
