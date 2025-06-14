import flatpickr from "flatpickr";
import { blurMobileInputs } from "./toast.js";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

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

      // localStorage.setItem(
      //   `ribbon_${uid}_cache`,
      //   JSON.stringify({
      //     inicial,
      //     descontar: descontar === 0 ? "" : descontar,
      //   }))

      return { dataChange };
    },
  }).then(({ isConfirmed, value: { dataChange } }) => {
    if (isConfirmed) {
      const { uid } = JSON.parse(localStorage.getItem("userLoggedIn"));
      localStorage.setItem(`data_${uid}_forExib`, JSON.stringify(dataChange));
    }
  });
});
