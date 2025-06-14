import flatpickr from "flatpickr";
import { blurMobileInputs } from "./toast.js";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import REGISTRO from "./relatorio.js";
import { resetCharts } from "../chart/chart.js";
import { actualMonth, actualYear } from "./user.js";

document.getElementById("changeRelatorio").addEventListener("click", () => {
  Swal.fire({
    title: "Mudar mês/ano de exibição",
    icon: "info",
    customClass: {
      popup: "swal-glass",
    },
    html: `
        <div class="edit-div">
            <div>
                <label for="dataForExib">Mudar Data:</label>
                <input name="dataForExib"  class="swal2-input"  id="dataForExib" type="text" autocomplete="off" placeholder="Data para exibição" >
            </div>
        </div>
        `,
    didOpen: () => {
      blurMobileInputs();

      flatpickr("#dataForExib", {
        defaultDate: "today",
        plugins: [
          new monthSelectPlugin({
            shorthand: true,
            dateFormat: "m/Y", // Valor do input real
            altFormat: "M Y", // Valor exibido pro usuário (Ex: Junho 2025)
          }),
        ],
        locale: Portuguese, // Traduz pro português
      });
    },
    preConfirm() {
      const dataChange = document.getElementById("dataForExib").value;

      if (dataChange.trim() === "") {
        return Swal.showValidationMessage("Preencha os campos obrigatórios.");
      }

      return { dataChange };
    },
  }).then(async ({ isConfirmed, value }) => {
    if (isConfirmed) {
      const { dataChange } = value;
      if (dataChange === `${actualMonth()}/${actualYear()}`) return;
      const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
      localStorage.removeItem(`data_${uid}_cache`);
      localStorage.setItem(`data_${uid}_forExib`, JSON.stringify(dataChange));
      resetCharts();
      await REGISTRO.updateDataList();
    }
  });
});
