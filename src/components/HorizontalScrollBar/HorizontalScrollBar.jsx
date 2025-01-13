import { Box } from "@mui/material";
import React from "react";
import { BodyPart, ExerciseCard } from "../../components";

const HorizontalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <div className="overflow">
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m={"0 40px"}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
