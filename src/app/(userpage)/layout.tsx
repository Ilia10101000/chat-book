'use client'
import React, { ReactNode } from "react";
import { Box, Drawer, ListItem, List, ListItemButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface LayoutProps {
  children: ReactNode;
}

export default function UserPageLayout({ children }: LayoutProps) {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const toogleMenu = () => setOpen(value => !value)
  console.log(theme)
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <Drawer variant="persistent">
          <List>
            <ListItem>
              <ListItemButton>Home</ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>Friend</ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Box sx={{
        flexGrow:1,
      }}>{children}</Box>
    </Box>
  );
}
