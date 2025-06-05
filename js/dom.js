import register from "./registro.js";
import REGISTRO from "./relatorio.js";

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
        theme: localStorage.getItem("theme"),
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
          theme: `${localStorage.getItem("theme")}`,
          confirmButtonText: "Concluir edição",
          denyButtonText: "Remover dia",
          showDenyButton: true,
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
            return [
              document.getElementById("swal-input1").value,
              document.getElementById("swal-input2").value,
              document.getElementById("swal-input3").value,
            ];
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

            Swal.fire({
              title: "Dia removido!",
              text: `Dia ${data} removido.`,
              theme: localStorage.getItem("theme"),
              icon: "success",
            });
          } else if (dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              title: "Cancelado",
              text: "O dia não foi editado.",
              theme: localStorage.getItem("theme"),
              icon: "error",
            });
          }
        });
      });
    }
  });
}

// GERAR RELATÓRIO

{
  document.getElementById("gerarRelatorio").addEventListener("click", () => {
    if (REGISTRO.relatorios[REGISTRO.fotografo].length === 0)
      return Swal.fire({
        title: "Não há registros para gerar relatório",
        icon: "error",
        theme: localStorage.getItem("theme"),
      });

    const newRelatory = REGISTRO.relatorios[REGISTRO.fotografo].reduce(
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
      title: `📸 Relatório Geral do(a) ${REGISTRO.fotografo}`,
      theme: localStorage.getItem("theme"),
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
