import React from "react";
import images from "../../constants/images";
import { Stack, Typography, Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: images.bodyPart,
      name: bodyPart,
    },
    {
      icon: images.target,
      name: target,
    },
    {
      icon: images.equipment,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: "35px", xs: "20px" }}>
        <Typography
          sx={{ fontSize: { lg: "60px", xs: "25px" } }}
          fontWeight={650}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "22px", xs: "16px" } }}
          color="#726F6FFF"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#F3DBB3FF",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "28px", xs: "18px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
