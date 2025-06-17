import { blurMobileInputs } from "../js/toast.js";

const ribbon = document.getElementById("ribbon");

ribbon.addEventListener("click", () => {
  const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
  const storaged = JSON.parse(localStorage.getItem(`ribbon_${uid}_cache`));

  Swal.fire({
    title: "Gerenciar Fotos",
    icon: "info",
    customClass: {
      popup: "swal-glass",
    },
    html: `
        <div class="edit-div">
            <div>
                <span for="initialR">Inicial</span>
                <input name="initialR"  class="swal2-input"  id="initialR" type="text" autocomplete="off" placeholder="Ribbon Inicial" value="${
                  storaged?.inicial ?? ""
                }">
            </div>

            <div> 
                <span for="atualR">Atual</span>
                <input name="atualR"  class="swal2-input"  id="atualR" type="text" autocomplete="off" placeholder="Ribbon atual">
            </div>

             <div>
                <span for="sobras">Sobras</span>
                <input id="ribbonSobras" class="swal2-input" name="ribbonSobras" type="text" autocomplete="off" placeholder="Sobras">
            </div>

            <div>
                <span for="Others">Descontar</span>
                <input id="ribbonOthers" class="swal2-input" name="ribbonOthers" type="text" autocomplete="off" placeholder="Descontar revelações" value="${
                  storaged?.descontar ?? ""
                }">
            </div>

        </div>
    `,
    didOpen: blurMobileInputs(),
    preConfirm() {
      const inicial = document.getElementById("initialR").value;
      const atual = document.getElementById("atualR").value;
      const sobras = document.getElementById("ribbonSobras").value;
      const descontar = document.getElementById("ribbonOthers").value || 0;

      if (inicial.trim() === "" || atual.trim() === "" || sobras.trim() === "") {
        return Swal.showValidationMessage("Preencha os campos obrigatórios.");
      }

      if (
        !Number.isInteger(parseInt(inicial)) ||
        !Number.isInteger(parseInt(atual)) ||
        !Number.isInteger(parseInt(sobras))
      ) {
        return Swal.showValidationMessage("Os valores deverão conter apenas números.");
      }

      if (descontar !== 0 && descontar.trim() !== "" && !Number.isInteger(parseInt(descontar))) {
        return Swal.showValidationMessage("As fotos a ser descontadas deverá ser um número.");
      }

      if (inicial > atual)
        localStorage.setItem(
          `ribbon_${uid}_cache`,
          JSON.stringify({
            inicial,
            descontar: descontar === 0 ? "" : descontar,
          })
        );

      return { inicial, atual, sobras, descontar };
    },
  }).then(({ isConfirmed, value }) => {
    if (isConfirmed) {
      const { inicial, atual, sobras, descontar } = value;

      if (parseInt(inicial) < parseInt(atual)) {
        Swal.fire({
          title: "Troca de Ribbon",
          icon: "warning",
          customClass: {
            popup: "swal-glass",
          },
          html: `
            <div class="edit-div">
                <div>
                    <label for="finishR">Terminou</label>
                    <input name="finishR"  class="swal2-input"  id="finishR" type="text" autocomplete="off" placeholder="Ex: (-1, 2, 1)" value="${
                      storaged?.finishR ?? ""
                    }">
                </div>

                <div> 
                    <label for="resetedR">Começou</label>
                    <input name="resetedR"  class="swal2-input"  id="resetedR" type="text" autocomplete="off" placeholder="Ex: (799, 800)" value="${
                      storaged?.resetedR ?? ""
                    }">
                </div>
            </div>
          `,
          didOpen: blurMobileInputs(),
          preConfirm() {
            const finishR = document.getElementById("finishR").value;
            const resetedR = document.getElementById("resetedR").value;

            if (finishR.trim() === "" || resetedR.trim() === "")
              return Swal.showValidationMessage("Preencha os campos obrigatórios.");

            if (!Number.isInteger(parseInt(finishR)) || !Number.isInteger(parseInt(resetedR)))
              return Swal.showValidationMessage("Os valores deverão conter apenas números.");

            return { finishR, resetedR };
          },
        }).then(({ isConfirmed, value }) => {
          if (isConfirmed) {
            localStorage.setItem(
              `ribbon_${uid}_cache`,
              JSON.stringify({
                inicial,
                descontar: descontar === 0 ? "" : descontar,
                finishR: value.finishR,
                resetedR: value.resetedR,
              })
            );

            const { finishR, resetedR } = value;
            const oldRibbon = parseInt(inicial) - parseInt(finishR);
            const newRibbon = parseInt(resetedR) - parseInt(atual);

            const totalRev = oldRibbon + newRibbon;
            const minhasRev = totalRev - parseInt(descontar);
            const minhasVendas = minhasRev - parseInt(sobras);

            return Swal.fire({
              title: `📸 Relatório de Produção`,
              html: `
                <div class="swal-cont">
                    <p>🧾 Vendas: ${minhasVendas} Fotos.</p>
                    <p>📦 Sobras: ${sobras} Fotos.</p>
                    <p>🏭 Produção: ${minhasRev} Fotos.</p>
                </div>
            `,
              icon: "success",
              customClass: {
                popup: "swal-glass",
              },
            });
          }
        });
      } else {
        const totalRevelado = parseInt(inicial) - parseInt(atual);
        const minhasRevl = totalRevelado - parseInt(descontar);
        const minhasVendas = minhasRevl - parseInt(sobras);

        return Swal.fire({
          title: `📸 Relatório de Produção`,
          icon: "success",
          html: `
            <div class="swal-cont">
                <p>🧾 Vendas: ${minhasVendas} Fotos.</p>
                <p>📦 Sobras: ${sobras} Fotos.</p>
                <p>🏭 Produção: ${minhasRevl} Fotos.</p>
            </div>
          `,
          customClass: {
            popup: "swal-glass",
          },
        });
      }
    }
  });
});
