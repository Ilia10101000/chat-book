"use client";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { ReactNode, useState } from "react";
import AppBar from "@mui/material/AppBar";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import TuneIcon from "@mui/icons-material/Tune";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";

const drawerListItems = [
  { label: "Friends", icon: <GroupIcon /> },
  { label: "Message", icon: <EmailIcon /> },
  { label: "Settings", icon: <TuneIcon /> },
];

const drawerInner = drawerListItems.map(({ label, icon }) => (
  <Link
    key={label}
    href={`/${label.toLowerCase()}`}
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <ListItemButton
      key={label}
      sx={{
        minHeight: 48,
        justifyContent: "initial",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: 3,
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  </Link>
));

const drawerWidth = 200;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function CustomeBar({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const toogleDrawerOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={toogleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Custome Bar</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: `${drawerWidth}px`,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}px`,
          }
        }}
      >
        <DrawerHeader>
          <Typography variant="h6" sx={{ mx: "auto" }}>
            <b>Chat Book</b>
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>{drawerInner}</List>
      </Drawer>
      <Drawer
        open={open}
        onClose={toogleDrawerOpen}
        variant="temporary"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <DrawerHeader />
        <Divider />
        <List>{drawerInner}</List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
