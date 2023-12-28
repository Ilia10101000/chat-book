"use client";

import { Paper, Box } from "@mui/material";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { fireStore } from "@/firebase/auth";

interface Message {
  name: string;
}

export function MessageList({ list }: { list: Array<Message> }) {

  const [message, loading, error] = useCollection(
    collection(fireStore, "users")
  );

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
      <Box
        sx={{
          minWidth: "300px",
          maxWidth: "600px",
          marginX: "auto",
          gap: "10px",
          p: 5,
          display: "flex",
          flexDirection: "column",
          background: "rgba(0,0,0,0.5)",
        }}
      >
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
