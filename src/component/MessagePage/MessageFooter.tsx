import { Paper, Box, TextField, IconButton, Divider } from "@mui/material";
import { Menu } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";


const MessageFooter = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: {xs:'100%', sm: "calc(100% - 200px)" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component={"form"}
        sx={{
          display: "flex",
        }}
      >
        <IconButton>
          <Menu />
        </IconButton>
        <TextField fullWidth multiline maxRows={4} sx={{ width:{xs:'275px',sm:'375px'} }} />
        <IconButton>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export {MessageFooter}
