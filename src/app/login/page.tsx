import { Forms } from "@/component/LoginPage/Forms";
import { Box } from "@mui/material";
import Image from "next/image";
import User from "../../../public/login-user-icon.svg";

export default function LoginPage() {
  return (
    // <Box
    //   sx={{
    //     position: "absolute",
    //     top: 0,
    //     right: 0,
    //     left: 0,
    //     bottom: 0,
    //     zIndex: -10,
    //     background:
    //       "linear-gradient(45deg, rgba(136,0,255,1) 0%, rgba(53,46,232,1) 23%, rgba(68,212,236,1) 56%, rgba(0,255,76,1) 100%)",
    //   }}
    // >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          "&:before": {
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex:-1,
            background:
              "linear-gradient(45deg, rgba(136,0,255,1) 0%, rgba(53,46,232,1) 23%, rgba(68,212,236,1) 56%, rgba(0,255,76,1) 100%)",
          },
        }}
      >
        {" "}
        <Box>
          <Image src={User} alt="icon" width={100} height={100} />
        </Box>
        <Forms />
      </Box>
    // </Box>
  );
}
