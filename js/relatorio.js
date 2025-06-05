import register from "./registro.js";

const REGISTRO = {
  relatorios: {
    Elias: [],
    Sarah: [],
  },

  theme: localStorage.getItem("theme"),
  fotografo: localStorage.getItem("fot"),

  showSucess(message) {
    Swal.fire({
      title: message,
      icon: "success",
      draggable: true,
      theme: this.theme,
    });
  },

  showError(message) {
    Swal.fire({
      title: message,
      icon: "error",
      draggable: true,
      theme: this.theme,
    });
  },

  fotografoAtual() {
    if (this.fotografo === "Elias") {
      return this.relatorios.Elias;
    } else if (this.fotografo === "Sarah") {
      return this.relatorios.Sarah;
    } else {
      return console.error("Nenhum fotógrafo foi selecionado.");
    }
  },

  trocarFotografo() {
    this.fotografo = this.fotografo === "Elias" ? "Sarah" : "Elias";
    localStorage.setItem("fot", this.fotografo);
    this.carregarDoStorage();
    this.atualizarLista();
  },

  adicionarDia(day) {
    const dayExists = this.relatorios[this.fotografo].find((day_in) => day_in.data === day.data);
    console.log(dayExists);

    if (!dayExists) {
      this.relatorios[this.fotografo].push(day);
      const { campo, ordem } = JSON.parse(localStorage.getItem("filtering")) ?? { campo: "data", ordem: "Menor" };
      this.ordernar(campo, ordem);
      this.atualizarLista();

      this.showSucess("Registro adicionado com sucesso!");
    } else {
      this.showError(`Este dia já foi anteriormente adicionado, tente editá-lo.`);
    }
  },

  atualizarLista() {
    this.salvarNoStorage();

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

    this.relatorios[this.fotografo].forEach((day) => {
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

      data.innerText = `${day.data} - ${descobrirDiaDaSemana(relaDate)}`;

      const vendas = document.createElement("span");
      vendas.innerText = day.vendas;

      const sobras = document.createElement("span");
      sobras.innerText = day.sobras;

      const producao = document.createElement("span");
      producao.innerText = day.producao;

      const aproveitamento = document.createElement("span");
      aproveitamento.innerText = `${day.aprov}%`;

      criarRegistro.append(data, vendas, sobras, producao, aproveitamento);

      lista.appendChild(criarRegistro);
    });
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
    if (!data || !vendas || !sobras) return this.showError("Você deve inserir uma data, as vendas e as sobras.");

    // verifica se já existe um dia com a mesma data
    const dataFind = this.relatorios[this.fotografo].find((dia) => dia.data === data);
    const idExists = dataFind?.id === id;

    if ((dataFind && idExists) || (!dataFind && !idExists)) {
      this.removerRegistro(id);

      this.adicionarDia(new register(this.converterData(data), vendas, sobras));

      const { campo, ordem } = JSON.parse(localStorage.getItem("filtering")) ?? { campo: "data", ordem: "Menor" };
      this.ordernar(campo, ordem);
      this.atualizarLista();

      return this.showSucess(`Registro alterado com sucesso.`);
    } else {
      return this.showError("Já existe um registro com esta data no relatório.");
    }
  },

  getId(date) {
    const cutDate = date.split(" ");
    const ifExists = this.relatorios[this.fotografo].find((item) => item.data === cutDate[0]);
    return ifExists ? ifExists.id : false;
  },

  removerRegistro(id) {
    console.log(id);
    const index = this.relatorios[this.fotografo].findIndex((reg) => reg.id === id);
    this.relatorios[this.fotografo].splice(index, 1);
    this.atualizarLista();
  },

  salvarNoStorage() {
    localStorage.setItem(`relatorio_${this.fotografo}`, JSON.stringify(this.relatorios[this.fotografo]));
  },

  carregarDoStorage() {
    const dados = localStorage.getItem(`relatorio_${this.fotografo}`);
    {
      const title = document.getElementById("registros-title");
      if (localStorage.getItem("fot") == "Sarah") {
        title.innerText = "";
        title.innerText = `Gerenciar registros da Sarah.`;
      } else {
        title.innerText = "";
        title.innerText = `Gerenciar registros do Elias.`;
      }
    }

    if (dados != undefined) {
      return (this.relatorios[this.fotografo] = JSON.parse(dados));
    } else {
      return (this.relatorios[this.fotografo] = []);
    }
  },

  ordernar(campo, ordem) {
    this.relatorios[this.fotografo].sort((a, b) => {
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

    console.log(this.relatorios[this.fotografo]);
    this.atualizarLista();
  },
};

export default REGISTRO;
