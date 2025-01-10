import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ExerciseDetail, Home } from "./pages";
import { Navbar, Footer } from "./components";

import "./App.css";

const App = () => {
  return (
    <Box m={"auto"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
