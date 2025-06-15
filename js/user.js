import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../db/firebase.js";
import { signOut } from "firebase/auth";
import { Toast } from "./toast.js";

export const actualYear = () => {
  const now = new Date();
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
  const year = JSON.parse(localStorage.getItem(`data_${uid}_forExib`))?.split("/");

  if (!year) return now.getFullYear();

  return year[1];
};

export const actualMonth = () => {
  const now = new Date();
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
  const month = JSON.parse(localStorage.getItem(`data_${uid}_forExib`))?.split("/");
  if (!month) return now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;

  return month[0];
};

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
    return (window.location.href = "/relatorio-fotos/auth");
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
    const { data } = (await getDoc(doc(db, "usuarios", user.uid))).data();

    const vales = data[actualYear()][actualMonth()].vales;

    await updateDoc(doc(db, "usuarios", user.uid), {
      [`data.${actualYear()}.${actualMonth()}.vales`]: [...vales, newVale],
    });

    const storaged = JSON.parse(localStorage.getItem(`data_${user.uid}_cache`));
    storaged.vales = [...storaged.vales, newVale];

    localStorage.setItem(`data_${user.uid}_cache`, JSON.stringify(storaged));
    addDesconto(newVale, "vales");
  } catch (err) {
    console.error(err);
  }
};

export const addDesconto = async (newDesconto, reason = false) => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn") ?? false);
  if (!user) return false;
  try {
    const { data } = (await getDoc(doc(db, "usuarios", user.uid))).data();

    const descontos = data[actualYear()][actualMonth()].descontos;

    await updateDoc(doc(db, "usuarios", user.uid), {
      [`data.${actualYear()}.${actualMonth()}.descontos`]: [...descontos, newDesconto],
    });

    const storaged = JSON.parse(localStorage.getItem(`data_${user.uid}_cache`));
    storaged.descontos = [...storaged.descontos, newDesconto];

    localStorage.setItem(`data_${user.uid}_cache`, JSON.stringify(storaged));
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
  const dataCache = JSON.parse(localStorage.getItem(`data_${uid}_cache`)) ?? [];
  const banca = dataCache.banca ?? [];
  const vendas = dataCache.banca?.reduce((ac, i) => ac + parseInt(i.vendas), 0) ?? [];
  const sobras = dataCache.banca?.reduce((ac, i) => ac + parseInt(i.sobras), 0) ?? [];
  const vales = dataCache.vales ?? [];
  const descontos = dataCache.descontos ?? [];
  const faltas = descontos.filter((desconto) => desconto.motivo === "Foto Ausente") ?? [];

  return { dataCache, banca, vendas, sobras, vales, descontos, faltas };
};

export const getPhotographers = async (username) => {
  const usersRef = collection(db, "usuarios");
  const reqSnap = await getDocs(query(usersRef, where("user", "==", username)));

  if (reqSnap.empty) return null;

  const doc = reqSnap.docs[0];
  return { id: doc.id, ...doc.data() };
};

document.getElementById("log-out")?.addEventListener("click", logOut);
document.addEventListener("DOMContentLoaded", isLogged);
