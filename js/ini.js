import { doc, updateDoc } from "firebase/firestore";
import REGISTRO from "./relatorio.js";
import { actualMonth, actualYear, getUser } from "./user.js";
import { db } from "../db/firebase.js";

// Inicialização ao carregar a página
{
  await REGISTRO.init();
}
