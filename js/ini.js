import REGISTRO from "./relatorio.js";
import { applyTheme } from "../theme.js";

// Inicialização ao carregar a página
{
  REGISTRO.carregarDoStorage();
  REGISTRO.atualizarLista();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  !localStorage.getItem("fot") ? localStorage.setItem("fot", "Elias") : "";
  applyTheme(savedTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const getUserLogged = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;

  if (!getUserLogged && !getUserLogged.uid) {
    window.location.href = "/auth";
  }
});
