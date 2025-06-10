import { auth, db } from "../db/firebase.js";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Toast } from "../js/toast.js";

const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");

function isEmpty({ value: nome }, { value: senha }) {
  if (!nome || nome === "" || !senha || senha === "") {
    return true;
  }
  return false;
}

document.getElementById("auth-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

document.getElementById("btn-login").addEventListener("click", async () => {
  if (isEmpty(user, password))
    return Toast.fire({
      icon: "warning",
      title: "Preencha todos os campos!",
    });

  try {
    const usuariosRef = collection(db, "usuarios");
    const q = query(usuariosRef, where("user", "==", user.value));
    const result = await getDocs(q);

    console.log(result);
    if (result.empty)
      return Toast.fire({
        icon: "error",
        title: "Usuário não existe!",
      });

    const docUser = result.docs[0];
    const emailUser = docUser.data().email;

    await signInWithEmailAndPassword(auth, emailUser, password.value);

    localStorage.setItem(
      "userLoggedIn",
      JSON.stringify({
        uid: docUser.id,
        email: emailUser,
        name: user.value,
      })
    );

    Toast.fire({
      icon: "success",
      title: "Logado com sucesso!",
    });

    setTimeout(() => {
      window.location.href = "/relatorio-fotos/index.html";
    }, 500);
  } catch (err) {
    if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password") {
      return Toast.fire({
        icon: "error",
        title: "Credenciais inválidas.",
      });
    }
    console.error("Erro ao fazer login:", err.message);
  }
});

const btn_register = document.getElementById("btn-register");
const btn_text = btn_register.querySelector(".btn-text");
const spinner = btn_register.querySelector(".spinner");

const disableBtn = () => {
  btn_register.disabled = true;
  btn_text.style.visibility = "hidden";
  spinner.style.display = "inline-block";
};

const activeBtn = () => {
  btn_register.disabled = false;
  btn_text.style.visibility = "visible";
  spinner.style.display = "none";
};

btn_register.addEventListener("click", async () => {
  if (isEmpty(user, password))
    return Toast.fire({
      icon: "warning",
      title: "Preencha o usuário e a senha!",
    });

  if (!email.value || email.value === "") {
    email.style.display = "block";

    return Toast.fire({
      icon: "error",
      title: "Insira um email!",
    });
  }

  disableBtn();

  try {
    const usuariosRef = collection(db, "usuarios");
    const qUser = query(usuariosRef, where("user", "==", user.value));
    const qEmail = query(usuariosRef, where("email", "==", email.value));
    const resultUser = await getDocs(qUser);
    const resultEmail = await getDocs(qEmail);

    if (!resultUser.empty) {
      activeBtn();
      return Toast.fire({
        icon: "error",
        title: "Usuário já existe.",
      });
    }

    if (!resultEmail.empty) {
      activeBtn();
      return Toast.fire({
        icon: "error",
        title: "Email já existe.",
      });
    }

    try {
      const credentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
      await setDoc(doc(db, "usuarios", credentials.user.uid), {
        user: user.value,
        email: email.value,
        banca: [],
        vales: [],
        descontos: [],
      });

      email.style.display = "none";

      activeBtn();

      Toast.fire({
        icon: "success",
        title: "Registrado com sucesso.",
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        activeBtn();
        return Toast.fire({
          icon: "error",
          title: "Este e-mail já está registrado.",
        });
      } else if (err.code === "auth/invalid-email") {
        activeBtn();
        return Toast.fire({
          icon: "error",
          title: "Formato de email inválido, use @gmail.com",
        });
      } else {
        activeBtn();
        console.error(err.message);
      }
    }
  } catch (err) {
    activeBtn();
    console.log("linha 158, auth.js", err.message);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const getUserLogged = JSON.parse(localStorage.getItem("userLoggedIn")) ?? false;

  if (getUserLogged && getUserLogged.uid) {
    window.location.href = "/relatorio-fotos/index.html";
  }
});
