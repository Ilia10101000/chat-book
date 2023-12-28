import { Paper, Box, TextField, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { db } from '@/firebase/auth';
import {ref, set,get,child,push, update } from "firebase/database";

const setName = async (formData: FormData) => {
  'use server'
  const message = formData.get('message');

  push(child(ref(db), "users/value"));
  // set(ref(db,'users'),{value:message});
  // try {
  //   const data = await get(child(ref(db), "users/value"));
  //   if (data.exists()) {
  //     console.log(data.val())
  //   } else {
  //     console.log('Petux')
  //   }
    
  // } catch (error) {
  //   console.log(error)
  // }

}

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
      <form action={setName}>
        <IconButton>
          <Menu />
        </IconButton>
        <TextField name="message" fullWidth multiline maxRows={4} sx={{ width:{xs:'275px',sm:'375px'} }} />
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </form>
      
    </Paper>
  );
};

export {MessageFooter}
