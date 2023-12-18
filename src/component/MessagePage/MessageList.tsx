"use client";
import { MenuBookOutlined } from "@mui/icons-material";
import { Paper, Box, InputBase, IconButton, Divider } from "@mui/material";

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
          </Box>
          <Paper component={'form'} sx={{
              display: 'flex',
              position: 'fixed',
              bottom:0
          }}>
              <IconButton>
                  <MenuBookOutlined/>
              </IconButton>
              <InputBase />
              <Divider/>
              <IconButton>
                  <MenuBookOutlined/>
              </IconButton>
              
          </Paper>
    </Box>
  );
}
