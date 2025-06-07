import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../db/firebase.js";
import { signOut } from "firebase/auth";
import { Toast } from "./toast.js";

export const getUser = async () => {
  const getUserLogged = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;

  if (!getUserLogged) return;
  console.log(getUserLogged);
  const userRef = doc(db, "usuarios", getUserLogged.uid) ?? false;
  const docSnap = userRef ? await getDoc(userRef) : false;

  if (docSnap) {
    return docSnap.data();
  }
};

const isLogged = () => {
  const getUserLogged = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;

  if (!getUserLogged && !getUserLogged.uid) {
    return (window.location.href = "/auth");
  }
};

export const logOut = async () => {
  const user = (await getUser()) ?? false;

  if (user) await signOut(auth);
  localStorage.removeItem("userLoggedIn");

  isLogged();

  return Toast.fire({
    icon: "success",
    text: "Deslogado com sucesso.",
  });
};

export const getUserName = () => {
  const { name } = JSON.parse(localStorage.getItem("userLoggedIn")) ?? "Error";
  return name;
};

document.getElementById("log-out").addEventListener("click", logOut);
document.addEventListener("DOMContentLoaded", isLogged);
