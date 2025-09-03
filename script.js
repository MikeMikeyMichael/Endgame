(function () {
  const el = document.documentElement;
  const KEY = "endgame-theme";
  const saved = localStorage.getItem(KEY);

  function setFav(mode){
    const link = document.getElementById("favicon");
    if (link) link.href = mode === "dark" ? "favicon-dark.svg" : "favicon-light.svg";
  }

  if (saved === "dark") { el.classList.add("dark"); setFav("dark"); }
  else { setFav("light"); }

  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    el.classList.toggle("dark");
    const mode = el.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem(KEY, mode);
    setFav(mode);
  });
})();
