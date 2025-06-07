export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
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
