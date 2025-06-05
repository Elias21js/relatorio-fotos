function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  document.getElementById("theme-btn").textContent = `${theme} mode`;
}

document.getElementById("theme-btn").addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

export { applyTheme };
