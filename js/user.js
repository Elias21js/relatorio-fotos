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
  localStorage.clear();

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

export const addDesconto = async (newDesconto) => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn") ?? false);
  if (!user) return false;
  try {
    const { data } = (await getDoc(doc(db, "usuarios", user.uid))).data();

    const descontos = data[actualYear()][actualMonth()].descontos ?? [];

    await updateDoc(doc(db, "usuarios", user.uid), {
      [`data.${actualYear()}.${actualMonth()}.descontos`]: [...descontos, newDesconto],
    });

    const storaged = JSON.parse(localStorage.getItem(`data_${user.uid}_cache`));
    storaged.descontos = [...storaged.descontos, newDesconto];

    localStorage.setItem(`data_${user.uid}_cache`, JSON.stringify(storaged));
  } catch (err) {
    console.error(err);
  }

  Toast.fire({ icon: "success", title: "Descontos atualizados no banco de dados." });
};

export const addFaltas = async ({ data, fotos }) => {
  addDesconto({ data, motivo: "Foto Ausente", fotos }, "faltas");
};

export const handleDesconto = async ({ id, dia = null, motivo = null, valor = 0 }, action) => {
  const user = JSON.parse(localStorage.getItem("userLoggedIn") ?? false);

  if (!user) return false;

  try {
    const { descontos } = JSON.parse(localStorage.getItem(`data_${user.uid}_cache`));

    const exists = descontos.some((d) => d.id === id);
    if (!exists) {
      return Toast.fire({
        title: "ID não encontrado!",
        icon: "error",
        customClass: { popup: "toast-glass" },
      });
    }

    const updateDescontos = async (array) => {
      await updateDoc(doc(db, "usuarios", user.uid), {
        [`data.${actualYear()}.${actualMonth()}.descontos`]: array,
      });
      const cached = JSON.parse(localStorage.getItem(`data_${user.uid}_cache`));
      localStorage.setItem(`data_${user.uid}_cache`, JSON.stringify({ ...cached, descontos: array }));
    };

    if (action === "edit") {
      const findIndex = descontos.findIndex((d) => d.id === id);
      const newDescontos = [...descontos];
      newDescontos[findIndex] = {
        id,
        dia,
        motivo,
        valor,
      };
      await updateDescontos(newDescontos);

      return Toast.fire({
        title: "Desconto editado com sucesso!",
        icon: "success",
        customClass: {
          popup: "toast-glass",
        },
      });
    } else if (action === "delete") {
      const withOut = [...descontos].filter((d) => d.id !== id);

      await updateDescontos(withOut);

      if (withOut.some((i) => i.id === id)) {
        return Toast.fire({
          title: "Houve um erro silencioso, não foi deletado!",
          icon: "error",
          customClass: {
            popup: "toast-glass",
          },
        });
      } else {
        return Toast.fire({
          title: "Desconto removido com sucesso!",
          icon: "success",
          customClass: {
            popup: "toast-glass",
          },
        });
      }
    }
  } catch (err) {
    console.error(err);
    Toast.fire({
      title: "Houve um erro interno ao acessar os descontos!",
      icon: "error",
      customClass: {
        popup: "toast-glass",
      },
    });
  }
};

export const getUserBanca = async () => {
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
  const dataCache = JSON.parse(localStorage.getItem(`data_${uid}_cache`)) ?? [];
  const banca = dataCache.banca ?? [];
  const vendas = dataCache.banca?.reduce((ac, i) => ac + parseInt(i.vendas), 0) ?? [];
  const sobras = dataCache.banca?.reduce((ac, i) => ac + parseInt(i.sobras), 0) ?? [];
  const descontos = dataCache.descontos ?? [];
  const faltas = descontos.filter((desconto) => desconto.motivo === "Foto Ausente") ?? [];

  return { dataCache, banca, vendas, sobras, descontos, faltas };
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
