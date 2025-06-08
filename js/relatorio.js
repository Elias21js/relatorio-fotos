import { doc, getDoc, updateDoc } from "firebase/firestore";
import register from "./registro.js";
import { db } from "../db/firebase.js";
import { Toast } from "./toast.js";
import Registro from "./registro.js";
import { showSucess, showError } from "./toast.js";
import { isExactly } from "./script.js";

const REGISTRO = {
  relatorios: [],

  async init() {
    if (!localStorage.getItem("userLoggedIn")) return;
    const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
    const local = JSON.parse(localStorage.getItem(`banca_${uid}_cache`)) ?? [];
    const localVales = JSON.parse(localStorage.getItem(`vales_${uid}_cache`)) ?? [];
    const localDescontos = JSON.parse(localStorage.getItem(`descontos_${uid}_cache`)) ?? [];

    const { banca, vales, descontos } = (await getDoc(doc(db, "usuarios", uid))).data();
    console.log("Ln 20, relatorio.js: ", banca, local);
    console.log("Ln 21, relatorio.js: ", vales, localVales);
    console.log("Ln 22, relatorio.js: ", descontos, localDescontos);

    if (isExactly(banca, local) && isExactly(vales, localVales) && isExactly(descontos, localDescontos)) {
      Toast.fire({ icon: "success", title: "Dados atualizados e sincronizados." });
      this.relatorios = local;
    } else {
      this.relatorios = banca;
      console.log("Ln 27, relatorio.js - init()", this.relatorios);

      if (!isExactly(banca, local)) localStorage.setItem(`banca_${uid}_cache`, JSON.stringify(banca));
      if (!isExactly(vales, localVales)) localStorage.setItem(`vales_${uid}_cache`, JSON.stringify(vales ?? []));
      if (!isExactly(descontos, localDescontos))
        localStorage.setItem(`descontos_${uid}_cache`, JSON.stringify(descontos ?? []));
      Toast.fire({ icon: "success", title: "Carregando dados do servidor..." });
    }

    const { campo, ordem } = JSON.parse(localStorage.getItem("filtering")) ?? { campo: "data", ordem: "Menor" };
    this.ordernar(campo, ordem);
  },

  async updateDB() {
    const user = JSON.parse(localStorage.getItem("userLoggedIn"));
    if (!user) return;

    console.log(user);

    const userRef = doc(db, "usuarios", user.uid);
    try {
      await updateDoc(userRef, {
        banca: this.relatorios.map((reg) => {
          if (reg instanceof Registro) return reg.toJSON();

          return reg;
        }),
      });

      localStorage.setItem(
        `banca_${user.uid}_cache`,
        JSON.stringify(
          this.relatorios.map((reg) => {
            if (reg instanceof Registro) return reg.toJSON();

            return reg;
          })
        )
      );
    } catch (err) {
      Toast.fire({ icon: "error", title: "⚠️ Erro ao salvar no database." });
      console.log(err);
    }
  },

  async adicionarDia(day, edit = false) {
    const dayExists = this.relatorios.find((day_in) => day_in.data === day.data);
    console.log(dayExists);

    if (!dayExists) {
      this.relatorios.push(day);
      await this.updateDB();

      const { campo, ordem } = JSON.parse(localStorage.getItem("filtering")) ?? { campo: "data", ordem: "Menor" };
      this.ordernar(campo, ordem);
      this.atualizarLista();

      if (!edit) showSucess("Registro adicionado com sucesso!");
    } else {
      showError(`Este dia já foi anteriormente adicionado, tente editá-lo.`);
    }
  },

  atualizarLista() {
    const lista = document.getElementById("listaRegistros");
    lista.innerHTML = "";

    const header = document.createElement("div");
    header.id = "registro-header";
    lista.appendChild(header);

    ["Data", "Vendas", "Sobras", "Produção", "Aprov."].forEach((item) => {
      const span = document.createElement("span");
      span.className = "span-header";
      span.innerText = item;
      header.appendChild(span);
    });

    const btn_relatorio = document.getElementById("gerarRelatorio");

    console.log(this.relatorios);

    document.getElementById("charts").style.display = "none";

    this.relatorios.forEach((day) => {
      const criarRegistro = document.createElement("div");
      criarRegistro.className = "registro div-estilosa";

      const data = document.createElement("span");

      function descobrirDiaDaSemana(dataString) {
        const diasDaSemana = [
          "domingo",
          "segunda-feira",
          "terça-feira",
          "quarta-feira",
          "quinta-feira",
          "sexta-feira",
          "sábado",
        ];

        const data = new Date(dataString); // Aceita formatos como '2025-05-01'
        const diaDaSemana = data.getDay(); // Retorna um número de 0 (domingo) a 6 (sábado)

        return diasDaSemana[diaDaSemana];
      }

      // Teste
      const [dia, mes] = day.data.split("/");
      const relaDate = new Date(2025, mes - 1, dia);

      data.textContent = `${day.data} - ${descobrirDiaDaSemana(relaDate)}`;

      const vendas = document.createElement("span");
      vendas.textContent = day.vendas;

      const sobras = document.createElement("span");
      sobras.textContent = day.sobras;

      const producao = document.createElement("span");
      producao.textContent = day.producao;

      const aproveitamento = document.createElement("span");
      aproveitamento.textContent = `${day.aprov}%`;

      criarRegistro.append(data, vendas, sobras, producao, aproveitamento);

      lista.appendChild(criarRegistro);
    });

    if (this.relatorios.length < 1) {
      btn_relatorio.style.display = "none";
      document.getElementById("gerarGraficos").style.display = "none";
    } else {
      btn_relatorio.style.display = "block";
      document.getElementById("gerarGraficos").style.display = "block";
    }
  },

  converterData(data) {
    const splited = data.split("/");
    let newDate = "";

    console.log(splited);
    if (splited[0].length < 2) {
      newDate += `0${splited[0]}/`;
    } else {
      newDate += `${splited[0]}/`;
    }

    if (splited[1].length < 2) {
      newDate += `0${splited[1]}`;
    } else {
      newDate += splited[1];
    }

    return newDate;
  },

  editarDia({ id, data, vendas, sobras }) {
    if (!data || !vendas || !sobras) return showError("Você deve inserir uma data, as vendas e as sobras.");

    // verifica se já existe um dia com a mesma data
    const dataFind = this.relatorios.find((dia) => dia.data === data);
    const idExists = dataFind?.id === id;

    if ((dataFind && idExists) || (!dataFind && !idExists)) {
      this.removerRegistro(id);

      this.adicionarDia(new register(this.converterData(data), vendas, sobras), true);

      const { campo, ordem } = JSON.parse(localStorage.getItem("filtering")) ?? { campo: "data", ordem: "Menor" };
      this.ordernar(campo, ordem);
      this.atualizarLista();

      return showSucess(`Registro alterado com sucesso.`);
    } else {
      return showError("Já existe um registro com esta data no relatório.");
    }
  },

  getId(date) {
    const cutDate = date.split(" ");
    const ifExists = this.relatorios.find((item) => item.data === cutDate[0]);
    return ifExists ? ifExists.id : false;
  },

  removerRegistro(id) {
    console.log(id);
    const index = this.relatorios.findIndex((reg) => reg.id === id);
    this.relatorios.splice(index, 1);
    this.updateDB();
    this.atualizarLista();
  },

  ordernar(campo, ordem) {
    this.relatorios.sort((a, b) => {
      let valorA, valorB;

      if (campo.toLowerCase() === "data") {
        const dataA = a.data.split("/");
        const dataB = b.data.split("/");
        valorA = new Date(2025, parseInt(dataA[1]) - 1, parseInt(dataA[0]));
        valorB = new Date(2025, parseInt(dataB[1]) - 1, parseInt(dataB[0]));
      } else if (campo.toLowerCase() === "vendas") {
        valorA = a.vendas;
        valorB = b.vendas;
      } else if (campo.toLowerCase() === "sobras") {
        valorA = a.sobras;
        valorB = b.sobras;
      } else if (campo.toLowerCase() === "produção") {
        valorA = a.producao;
        valorB = b.producao;
      } else if (campo.toLowerCase() === "aprov.") {
        valorA = parseFloat(a.aprov);
        valorB = parseFloat(b.aprov);
      }

      localStorage.setItem("filtering", JSON.stringify({ campo, ordem }));
      return ordem === "Maior" ? valorB - valorA : valorA - valorB;
    });

    console.log(this.relatorios);
    this.atualizarLista();
  },
};

export default REGISTRO;
