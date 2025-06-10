export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  customClass: {
    popup: "toast-glass",
    timerProgressBar: "progress-glass",
  },
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export function showSucess(message) {
  Swal.fire({
    title: message,
    icon: "success",
    draggable: true,
    customClass: {
      popup: "swal-glass",
    },
  });
}

export function showError(message) {
  Swal.fire({
    title: message,
    icon: "error",
    draggable: true,
    customClass: {
      popup: "swal-glass",
    },
  });
}

export function blurMobileInputs(swallowTheKeeb = true) {
  return () => {
    if (!swallowTheKeeb) return;
    const inputs = Swal.getPopup()?.querySelectorAll(".swal2-input");
    if (!inputs) return;

    inputs.forEach((input) => {
      input.setAttribute("readonly", true);
      input.addEventListener(
        "focus",
        () => {
          input.removeAttribute("readonly");
        },
        { once: true }
      ); // só remove uma vez por input
    });
  };
}
