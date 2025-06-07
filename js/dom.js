import { showError, showSucess } from "./toast.js";
import register from "./registro.js";
import REGISTRO from "./relatorio.js";
import { addVale, getUserName } from "./user.js";

// CRIAR REGISTRO
{
  document.getElementById("formRegistro").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = document.getElementById("data").value;
    const vendas = parseInt(document.getElementById("vendidas").value);
    const sobras = parseInt(document.getElementById("sobras").value);

    REGISTRO.adicionarDia(new register(REGISTRO.converterData(data), vendas, sobras));
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
        theme: "dark",
        inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return "Você precisa escolher uma opção para filtrar.";
          }
        },
      });

      if (item_swal) {
        console.log(element.textContent);
        console.log(item_swal);
        REGISTRO.ordernar(element.textContent, item_swal);
      }
    }
  });

  // EDITAR OU REMOVER DIA

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
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" value=${data}>
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
          focusConfirm: false,
          preConfirm: () => {
            const swal1 = document.getElementById("swal-input1").value;
            const swal2 = document.getElementById("swal-input2").value;
            const swal3 = document.getElementById("swal-input3").value;

            if (swal1.trim() === "" || swal2.trim() === "" || swal3.trim() === "") return false;

            return [swal1, swal2, swal3];
          },
        }).then(({ isConfirmed, isDenied, dismiss, value }) => {
          if (isConfirmed) {
            console.log(value);
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
  document.getElementById("gerarRelatorio").addEventListener("click", () => {
    if (REGISTRO.relatorios.length === 0) return showError("Não há registros para gerar relatório");

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
      width: "30vw",
      customClass: {
        popup: "rela-geral swal-glass",
      },
      html: `
        <div class="rela-div">
          <ul class="ul-rela">
            <li><strong>📅 Dias Trabalhados:</strong> ${newRelatory.sumDatas}</li>
            <li><strong>💰 Ganho Total:</strong> R$ ${newRelatory.ganho},00</li>
            <li><strong>🛒 Vendas Totais:</strong> ${newRelatory.sumVendas}</li>
            <li><strong>📦 Sobras:</strong> ${newRelatory.sumSobras}</li>
            <li><strong>🏭 Produção:</strong> ${newRelatory.sumProd}</li>
            <li><strong>📈 Aproveitamento:</strong> ${newRelatory.sumAprov}%</li>
          </ul>
        </div>
      `,
      confirmButtonText: "Fechar",
    });
  });
}

// ADICIONAR VALES

document.getElementById("vale").addEventListener("click", () => {
  Swal.fire({
    title: `Adicionar vale: `,
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
              <div id="edit-div">
                <div>
                    <label for="swal-input1">Data: </label>
                    <input id="swal-input1" class="swal2-input" autocomplete="off">
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
    focusConfirm: false,
    preConfirm: () => {
      const data = document.getElementById("swal-input1").value;
      const motivo = document.getElementById("swal-input2").value;
      const valor = document.getElementById("swal-input3").value;

      if (!data || data.trim() === "") return false;
      if (!valor || valor.trim() === "") return false;

      return [data, motivo.trim() === "" ? "motivo não informado." : motivo, valor];
    },
  }).then(({ isConfirmed, isDenied, dismiss, value }) => {
    if (isConfirmed) {
      if (!value) return;
      const Arrayed = Array.from(value);
      console.log(Arrayed);
      addVale({ data: value[0], motivo: value[1], valor: value[2] });
    } else if (isDenied) {
    } else if (dismiss === Swal.DismissReason.cancel) {
    }
  });
});

// ADICIONAR DESCONTOS

// ADICIONAR FOTOS FALTANDO
