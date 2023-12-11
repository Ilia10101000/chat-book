"use client";
import { Forms } from "@/component/LoginPage/Forms";
import Box from "@mui/material/Box";
import Image from "next/image";
import User from "../../../public/login-user-icon.svg";

const LoginPage = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        borderRadius: "10px",
        width: "fit-content",
        p: 4,
        gap: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255,255,255,0.5)"
            : "rgba(0,0,0,0.7)",
        boxShadow: 5,
        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1,
          background:
            "linear-gradient(45deg, rgba(136,0,255,1) 0%, rgba(53,46,232,1) 23%, rgba(68,212,236,1) 56%, rgba(0,255,76,1) 100%)",
        },
      }}
    >
      <Box>
        <Image src={User} alt="icon" />
      </Box>
      <Box>
        <Forms />
      </Box>
    </Box>
  );
};

export { LoginPage };
