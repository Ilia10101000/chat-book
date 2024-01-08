"use client";
import { EmailForms } from "@/component/LoginPage/EmailForms";
import { PhoneForm } from "@/component/LoginPage/PhoneForm";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Image from "next/image";
import User from "../../../public/login-user-icon.svg";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/auth';
import {
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  RecaptchaVerifier,
} from "firebase/auth";

interface IWindow extends Window {
  recaptchaVerifier?: any,
  confirmResult?:any
}
const windowI: IWindow = window;

const LoginPage = () => {

  const [isEmailLoginWay, setIsEmailLoginWay] = useState(true);

  const loginWithEmailPassword = (email: string, password: string) => {
    signInWithEmailAndPassword(auth,email,password)
  }

  function generateRecaptch() {
    
    windowI.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response:any) => {
        console.log(response)
      },
    });
  }

  const loginWithPhoneNumber = (phone: string) => {
    generateRecaptch();
    const appVerifier = windowI.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then(confirmResult => {
        windowI.confirmResult = confirmResult;
      }).catch(error => console.log(error))
  };

  const sendCode = async (code:string) => {
    const confirmResult = windowI.confirmResult;
    const user = await confirmResult.confirm(code);
    console.log(user)
  }

  const [user, loading, error] = useAuthState(auth)

  const toogleLoginWay = () => {
    setIsEmailLoginWay(value => !value)
  }
  
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
        {isEmailLoginWay ? (
          <EmailForms handleSubmit={loginWithEmailPassword} />
        ) : (
          <PhoneForm sendCode={sendCode} handleSubmit={loginWithPhoneNumber} />
        )}
      </Box>
      <Box>
        <Button onClick={toogleLoginWay}>
          {isEmailLoginWay ? "Login with phone" : "Login with email"}
        </Button>
      </Box>
      <Box sx={{ width: "300px" }}>{user && JSON.stringify(user)}</Box>
      <Box sx={{ width: "300px" }}>{error && JSON.stringify(error)}</Box>
    </Box>
  );
};




export { LoginPage };
