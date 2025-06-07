import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../db/firebase.js";
import { signOut } from "firebase/auth";
import { Toast } from "./toast.js";

export const getUser = async () => {
  const getUserLogged = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;

  if (!getUserLogged) return;
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

export const addVale = async (newVale) => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;
  if (!user) return;
  try {
    const { vales } = (await getDoc(doc(db, "usuarios", user.uid))).data();

    await updateDoc(doc(db, "usuarios", user.uid), {
      vales: [...vales, newVale],
    });
  } catch (err) {
    console.error(err);
  }

  Toast.fire({ icon: "success", title: "Vales atualizados no banco de dados." });
};

export const addDesconto = async () => {};

export const faltas = async () => {};

document.getElementById("log-out").addEventListener("click", logOut);
document.addEventListener("DOMContentLoaded", isLogged);
