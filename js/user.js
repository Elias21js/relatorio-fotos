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
  const atual = window.location.pathname;

  if (!getUserLogged && !getUserLogged.uid && !atual.includes("auth")) {
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

    localStorage.setItem(`vales_${user.uid}_cache`, JSON.stringify([...vales, newVale]));
    addDesconto(newVale, "vales");
  } catch (err) {
    console.error(err);
  }
};

export const addDesconto = async (newDesconto, reason = false) => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn") ?? false);
  if (!user) return false;
  try {
    const { descontos } = (await getDoc(doc(db, "usuarios", user.uid))).data();

    await updateDoc(doc(db, "usuarios", user.uid), {
      descontos: [...descontos, newDesconto],
    });

    localStorage.setItem(`descontos_${user.uid}_cache`, JSON.stringify([...descontos, newDesconto]));
  } catch (err) {
    console.error(err);
  }

  if (reason === "faltas") {
    Toast.fire({ icon: "success", title: "Faltas atualizadas no banco de dados." });
  } else if (reason === "vales") {
    Toast.fire({ icon: "success", title: "Vales atualizados no banco de dados." });
  } else {
    Toast.fire({ icon: "success", title: "Descontos atualizados no banco de dados." });
  }
};

export const addFaltas = async ({ data, fotos }) => {
  addDesconto({ data, motivo: "Foto Ausente", fotos }, "faltas");
};

export const getUserBanca = async () => {
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
  const vales = JSON.parse(localStorage.getItem(`vales_${uid}_cache`)) ?? [];
  const descontos = JSON.parse(localStorage.getItem(`descontos_${uid}_cache`)) ?? [];
  const faltas = descontos.filter((desconto) => desconto.motivo === "Foto Ausente") ?? [];

  console.log("Ln 93, vales - user.js", vales);
  console.log("Ln 94, descontos - user.js", descontos);
  console.log("Ln 95, faltas - user.js", faltas);
  return { vales, descontos, faltas };
};

document.getElementById("log-out").addEventListener("click", logOut);
document.addEventListener("DOMContentLoaded", isLogged);
