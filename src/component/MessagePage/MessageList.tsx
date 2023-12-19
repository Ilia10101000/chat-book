"use client";
import { Menu } from "@mui/icons-material";
import { Paper, Box, TextField, IconButton, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {styled} from "@mui/material";

interface Message {
  text: string;
}

export function MessageList({ list }: { list: Array<Message> }) {
  return (
    <Box>
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
        {list.map(({ text }, index) => (
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
            {text}
          </Paper>
        ))}
        <Box sx={{height:'50px'}}></Box>
      </Box>
      <Paper
        elevation={24}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component={"form"}
          sx={{
            display: "flex",
            minWidth: "400px",
            maxWidth: "600px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton>
            <Menu />
          </IconButton>
          <TextField multiline rows={2} sx={{ width: "100%" }} />
          <Divider orientation="vertical" />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
