"use client";

import { Paper, Box } from "@mui/material";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { fireStore } from "@/firebase/auth";
import Skeleton from "@mui/material/Skeleton";

interface Message {
  name: string;
}

export function MessageList({ list }: { list: Array<Message> }) {

  const [message, loading, error] = useCollection(
    collection(fireStore, "users")
  );

  const skeleton = new Array(10)
    .fill("0")
    .map((_, index) => (
      <Skeleton
        variant="rectangular"
        width={100}
        height={70}
        sx={
          {
            borderRadius: '5px',
            ...(
              !(index % 2) && { ml: "auto" } 
          )
        }
          
        }
      />
    ));

  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "600px",
        marginX: "auto",
        gap: "10px",
        height:'calc(100vh - 100px)',
        p: 5,
        border:'1px solid red',
        display: "flex",
        flexDirection: "column",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      {loading && skeleton}
      {message?.docs.map((doc, index) => (
          <Paper
            key={index}
            elevation={20}
            sx={{
              p: 2,
              alignSelf: index % 2 ? "flex-start" : "flex-end",
              maxWidth: "200px",
              overflowWrap: "break-word",
            }}
          >
            {doc.data().name}
          </Paper>
        ))}
      <Box sx={{ height: "50px" }}></Box>
    </Box>
  );
}
