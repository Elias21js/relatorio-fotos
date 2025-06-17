import { showError, showSucess } from "./toast.js";
import register from "./registro.js";
import REGISTRO from "./relatorio.js";
import { actualMonth, addDesconto, addFaltas, getUserBanca, getUserName, handleDesconto } from "./user.js";
import {
  renderBar,
  renderDoughnut,
  renderBarPessoal,
  renderSemanal,
  renderSwiper,
  smoothScrollTo,
  renderPerformance,
} from "../chart/chart.js";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import { v4 as uuidv4 } from "uuid";

// CRIAR REGISTRO
{
  document.getElementById("formRegistro").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = document.getElementById("data").value;
    const vendas = parseInt(document.getElementById("vendidas").value);
    const sobras = parseInt(document.getElementById("sobras").value);

    REGISTRO.adicionarDia(new register(REGISTRO.converterData(`${data}/${actualMonth()}`), vendas, sobras));
    document.getElementById("formRegistro").reset();
  });
}

// FILTRAR
{
  document.getElementById("listaRegistros").addEventListener("click", async (item_s) => {
    if (item_s.target.closest(".span-header")) {
      const element = item_s.target.closest(".span-header");

      const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            Maior: "Maior para o Menor",
            Menor: "Menor para o Maior",
          });
        }, 200);
      });

      const { value: item_swal } = await Swal.fire({
        title: `Filtrar ${element.textContent}`,
        text: "Selecione uma das opções a ser filtrada",
        input: "radio",
        customClass: {
          popup: "swal-glass",
        },
        inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return "Você precisa escolher uma opção para filtrar.";
          }
        },
      });

      if (item_swal) {
        REGISTRO.ordernar(element.textContent, item_swal);
      }
    }
  });
}

// EDITAR OU REMOVER DIA
{
  document.getElementById("listaRegistros").addEventListener("click", (item_l) => {
    if (item_l.target.closest(".registro")) {
      const element = item_l.target.closest(".registro");

      const data = element.children[0].textContent;
      const vendas = element.children[1].textContent;
      const sobras = element.children[2].textContent;

      Array.from(element.children).forEach(() => {
        Swal.fire({
          title: `Editar dia: `,
          icon: "info",
          inputAttributes: {
            autoComplete: "off",
          },
          confirmButtonText: "Concluir edição",
          denyButtonText: "Remover dia",
          showDenyButton: true,
          customClass: {
            popup: "swal-glass",
          },
          reverseButtons: true,
          html: `
              <div class="edit-div">
                <div>
                    <label for="swal-input1" >Data: </label>
                    <input id="swal-input1" class="data swal2-input" value=${data}>
                </div>
                <div>
                    <label for="swal-input2">Vendas: </label>
                    <input id="swal-input2" class="swal2-input" value=${vendas}>
                </div>
                <div>
                    <label for="swal-input3">Sobras: </label>
                    <input id="swal-input3" class="swal2-input" value=${sobras}>
                </div>
              </div>
            `,
          didOpen: () => {
            flatpickr(".data", {
              dateFormat: "d",
              altInput: false,
              altFormat: "F j, Y",
              locale: Portuguese,
              disableMobile: true,
            });
          },
          focusConfirm: false,
          preConfirm: () => {
            const swal1 = document.getElementById("swal-input1").value;
            const swal2 = document.getElementById("swal-input2").value;
            const swal3 = document.getElementById("swal-input3").value;

            if (swal1.trim() === "" || swal2.trim() === "" || swal3.trim() === "") return false;

            return [`${swal1}/${actualMonth()}`, swal2, swal3];
          },
        }).then(({ isConfirmed, isDenied, dismiss, value }) => {
          if (isConfirmed) {
            const Arrayed = Array.from(value);

            REGISTRO.editarDia({
              id: REGISTRO.getId(data),
              data: Arrayed[0],
              vendas: Arrayed[1],
              sobras: Arrayed[2],
            });
          } else if (isDenied) {
            REGISTRO.removerRegistro(REGISTRO.getId(data));

            showSucess(`Dia ${data} removido.`);
          } else if (dismiss === Swal.DismissReason.cancel) {
            showError("O dia não foi editado.");
          }
        });
      });
    }
  });
}

// GERAR RELATÓRIO

{
  document.getElementById("gerarRelatorio").addEventListener("click", async () => {
    if (REGISTRO.relatorios.length === 0) return showError("Não há registros para gerar relatório");

    const { descontos, faltas } = await getUserBanca();

    const sumDescontos = descontos.reduce((ac, i) => {
      if (i.motivo === "Foto Ausente") return ac + 15 * parseInt(i.fotos);

      return ac + parseFloat(i.valor);
    }, 0);
    const sumFaltas = faltas.reduce((ac, i) => ac + parseInt(i.fotos), 0);

    const newRelatory = REGISTRO.relatorios.reduce(
      (ac, item) => {
        ac.sumDatas += 1;
        ac.sumVendas += parseInt(item.vendas);
        ac.sumSobras += parseInt(item.sobras);
        ac.sumProd += parseInt(item.producao);
        ac.sumAprov = ((ac.sumVendas / ac.sumProd) * 100).toFixed(2);
        ac.ganho = ac.sumVendas * 3;
        return ac;
      },
      { sumDatas: 0, ganho: 0, sumVendas: 0, sumSobras: 0, sumProd: 0, sumAprov: 0.0 }
    );

    Swal.fire({
      title: `📸 Relatório Geral do(a) ${getUserName()}`,
      width: "clamp(265px, 90vw, 500px)",
      customClass: {
        title: "rela-title",
        popup: "rela-geral swal-glass",
      },
      html: `
        <div class="rela-div">
          <ul class="ul-rela">
            <li><strong>📅 Dias Trabalhados:</strong> ${newRelatory.sumDatas}</li>
            <li><strong>💸 Salário Bruto:</strong> R$ ${newRelatory.ganho}</li>
            <li><strong>🧾 Salário Líquido:</strong> R$ ${newRelatory.ganho - sumDescontos}</li>
            <li><strong>🛍️ Vendas Totais:</strong> ${newRelatory.sumVendas}</li>
            <li><strong>📦 Sobras:</strong> ${newRelatory.sumSobras}</li>
            <li><strong>🏭 Produção:</strong> ${newRelatory.sumProd}</li>
            <li><strong>📉 Descontos:</strong> R$ ${sumDescontos}</li>
            <li><strong>📸 Fotos perdidas:</strong> ${sumFaltas}</li>
            <li><strong>📊 Aproveitamento:</strong> ${newRelatory.sumAprov}%</li>
          </ul>
        </div>
      `,
      confirmButtonText: "Fechar",
    });
  });
}

// GERAR GRÁFICOS

const charts = document.getElementById("charts");
const chartBtn = document.getElementById("gerarGraficos");

const rankingDiv = document.getElementById("ranking-chart");
const rankingBtn = document.getElementById("ranking");

const rankChoice = document.getElementById("ranking-choice");
const rankingSemanal = document.getElementById("ranking-semanal");

const rankSemanalBtn = document.getElementById("semanal");
const rankMensalBtn = document.getElementById("mensal");

const performance = document.getElementById("ranking-performance");

const showChart = (chartToDisplay) => {
  if (chartToDisplay === "charts") {
    charts.classList.add("visible");
    rankChoice.classList.remove("visible");
    rankingSemanal.classList.remove("visible");
    rankingDiv.classList.remove("visible");
    performance.classList.remove("visible");
    rankingDiv.style.marginTop = "0";
    performance.style.marginBottom = "0";
  }

  if (chartToDisplay === "showRanking") {
    rankChoice.classList.add("visible");
    rankingDiv.classList.add("visible");
    rankingSemanal.classList.remove("visible");
    performance.classList.remove("visible");
    charts.classList.remove("visible");
    charts.style.marginTop = "0";
  }

  if (chartToDisplay === "rankingSemanal") {
    rankingDiv.classList.remove("visible");
    rankingSemanal.classList.add("visible");
    performance.classList.remove("visible");
    performance.style.marginBottom = "0";
  }

  if (chartToDisplay === "performance") {
    rankingDiv.classList.remove("visible");
    rankingSemanal.classList.remove("visible");
    charts.classList.remove("visible");
    performance.classList.add("visible");
    performance.style.marginBottom = "10rem";
    charts.style.marginTop = "0";
  }
};

// GERAR RANKING
{
  const showRanking = (before = false) => {
    showChart("showRanking");
    if (before) smoothScrollTo(rankingDiv, 1000);
    rankingDiv.style.marginTop = "10rem";
    renderBar();
  };

  {
    chartBtn.addEventListener("click", async () => {
      const { banca, vendas, sobras } = await getUserBanca();
      renderDoughnut(vendas + sobras, vendas, sobras);
      renderBarPessoal(banca);
      showChart("charts");
      charts.style.rowGap = "10rem";
      charts.style.marginTop = "10rem";
    });

    rankSemanalBtn.addEventListener("click", async () => {
      await renderSwiper();
      await renderSemanal();
      showChart("rankingSemanal");
    });

    rankingBtn.addEventListener("click", () => showRanking(true));

    rankMensalBtn.addEventListener("click", showRanking);

    document.getElementById("desempenho").addEventListener("click", async () => {
      const performanceDiv = document.getElementById("ranking-performance");
      showChart("performance");
      smoothScrollTo(performanceDiv, 1000);

      await renderPerformance();
    });
  }
}

// ADICIONAR DESCONTOS
{
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));

  const getCache = () => {
    const { descontos } = JSON.parse(localStorage.getItem(`data_${uid}_cache`));
    return descontos;
  };

  const headContainer = () => {
    if (getCache().length > 0) {
      return `<div class="head-container">
            <span class="span-header">DIA</span>
            <span class="span-header">MOTIVO</span>
            <span class="span-header">VALOR</span>
        </div>
        <div id="listagem" class="listagem"></div>`;
    } else {
      return `<div>
          <h2>
            Ainda não há descontos por aqui.
          </h2>
      </div>`;
    }
  };

  document.getElementById("desconto").addEventListener("click", async () => {
    Swal.fire({
      title: "Lista de descontos",
      icon: "info",
      confirmButtonText: "Adicionar Desconto",
      cancelButtonText: "Fechar",
      showCancelButton: true,
      showConfirmButton: true,
      reverseButtons: true,
      customClass: {
        popup: "swal-glass",
      },
      html: `
    `,
      didOpen: async () => {
        const htmlContainer = Swal.getHtmlContainer();
        if (htmlContainer) htmlContainer.innerHTML = "";

        htmlContainer.innerHTML = headContainer();
        setTimeout(() => {
          const lista = document.getElementById("listagem");

          const { descontos } = JSON.parse(localStorage.getItem(`data_${uid}_cache`)) ?? [];

          descontos?.forEach(({ id, dia, motivo, valor }) => {
            const container = document.createElement("div");
            container.classList.add("registro", "div-estilosa");
            container.style.cursor = "pointer";

            container.addEventListener("click", () => editOrRemove(id, dia, motivo, valor));

            const dataR = document.createElement("span");
            dataR.textContent = dia;
            const motivoR = document.createElement("span");
            motivoR.textContent = motivo;
            const valorR = document.createElement("span");
            valorR.textContent = `R$ ${valor}`;
            if (motivo === "Foto Ausente") valorR.textContent = `R$ ${parseInt(fotos) * 15}`;

            container.append(dataR, motivoR, valorR);

            lista.appendChild(container);
          });
        }, 0);
      },
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        addDescontos();
      }
    });
  });
}

// ADICIONAR DESCONTOS

const addDescontos = () => {
  Swal.fire({
    title: `Adicionar desconto: `,
    icon: "info",
    inputAttributes: {
      autoComplete: "off",
    },
    confirmButtonText: "Adicionar",
    denyButtonText: "Voltar",
    showDenyButton: true,
    customClass: {
      popup: "swal-glass",
    },
    reverseButtons: true,
    html: `
        <div class="edit-div">
          <div>
              <label for="swal-input1">Dia: </label>
              <input id="swal-input1" class="data swal2-input" autocomplete="off">
          </div>
          <div>
              <label for="swal-input2">Motivo: </label>
              <input id="swal-input2" class="swal2-input" placeholder="(OPCIONAL)" autocomplete="off">
          </div>
          <div>
              <label for="swal-input3">Valor: </label>
              <input id="swal-input3" class="swal2-input" autocomplete="off">
          </div>
        </div>
      `,
    didOpen: () => {
      flatpickr(".data", {
        dateFormat: "d",
        defaultDate: "today",
        altInput: false,
        altFormat: "F j, Y",
        locale: Portuguese,
        disableMobile: true,
      });
    },
    focusConfirm: false,
    preConfirm: () => {
      const dia = document.getElementById("swal-input1").value;
      const motivo = document.getElementById("swal-input2").value;
      const valor = document.getElementById("swal-input3").value;

      if (!dia || dia.trim() === "") return false;
      if (!valor || valor.trim() === "") return false;

      return [dia, motivo.trim() === "" ? "Não informado." : motivo, valor];
    },
  }).then(({ isConfirmed, isDenied, dismiss, value }) => {
    if (isConfirmed) {
      if (!value) return;
      addDesconto({ id: uuidv4(), dia: value[0], motivo: value[1], valor: value[2] });
    } else if (isDenied) {
    } else if (dismiss === Swal.DismissReason.cancel) {
    }
  });
};

// EDITAR OU REMOVER DESCONTOS

const editOrRemove = (id, dia, motivo, valor) => {
  Swal.fire({
    title: "Editar ou Remover",
    icon: "warning",
    customClass: "swal-glass",
    showDenyButton: true,
    showConfirmButton: true,
    reverseButtons: true,
    confirmButtonText: "Editar",
    denyButtonText: "Remover",
    html: `
      <div class="edit-div">
        <div>
            <label for="swal-input1">Dia:</label>
            <input id="swal-input1" value="${dia}" class="data swal2-input" autocomplete="off">
        </div>
        <div>
            <label for="swal-input2">Motivo: </label>
            <input id="swal-input2" value="${motivo}"class="swal2-input" placeholder="(OPCIONAL)" autocomplete="off">
        </div>
        <div>
            <label for="swal-input3">Valor: </label>
            <input id="swal-input3" ${valor ?? "readonly"} ${
      valor ?? "style='cursor: pointer; user-select: none;'"
    } value="${valor ?? 15}" class="swal2-input" autocomplete="off">
        </div>
      </div>
    `,
    didOpen: () => {
      flatpickr(".data", {
        dateFormat: "d",
        altInput: false,
        altFormat: "F j, Y",
        locale: Portuguese,
        disableMobile: true,
      });
    },
    preConfirm: () => {
      const dia = document.getElementById("swal-input1").value;
      let motivo = document.getElementById("swal-input2").value;
      const valor = document.getElementById("swal-input3").value;

      if (!dia || dia.trim() === "") return Swal.showValidationMessage("Insira um dia válido.");

      if (!motivo || motivo.trim() === "") motivo = "Não informado";

      if (!valor || valor.trim() === "" || parseInt(valor) === 0)
        return Swal.showValidationMessage("Insira um valor válido.");

      return { id, dia, motivo, valor };
    },
  }).then(async ({ isConfirmed, isDenied, value }) => {
    if (isConfirmed) {
      await handleDesconto(value, "edit");
    } else if (isDenied) {
      await handleDesconto({ id }, "delete");
    }
  });
};

flatpickr("#data", {
  dateFormat: "d",
  defaultDate: "today",
  altInput: false,
  altFormat: "F j, Y",
  locale: Portuguese,
  disableMobile: true,
});
