// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACJt2URmcDfA_5XZTaGaa3epN-3-jLOaM",
  authDomain: "relatorio-fotos.firebaseapp.com",
  projectId: "relatorio-fotos",
  storageBucket: "relatorio-fotos.firebasestorage.app",
  messagingSenderId: "325899048419",
  appId: "1:325899048419:web:ba9f4af22e7cdc9f5cfcd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// createUserWithEmailAndPassword(auth, "teste@exemplo.com", "senha123")
//   .then((userCredential) => {
//     console.log("Usuário criado com sucesso!", userCredential.user);
//   })
//   .catch((error) => {
//     console.error("Erro ao criar usuário:", error.code, error.message);
//   });
