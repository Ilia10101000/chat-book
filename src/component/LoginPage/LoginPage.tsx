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
