"use server";
import { fireStore } from "@/firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";


const addMessage = async (message:string) => {
  await addDoc(collection(fireStore, "users"), {
    message,
    time: serverTimestamp(),
  });
};

export {addMessage}