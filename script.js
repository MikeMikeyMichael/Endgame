(function () {
  const KEY = "endgame-theme";
  const root = document.documentElement;
  const logo = document.getElementById("logo");
  const fav = document.getElementById("favicon");

  function apply(mode){
    root.classList.toggle("dark", mode === "dark");
    if (logo){
      logo.src = mode === "dark" ? logo.dataset.dark : logo.dataset.light;
    }
    if (fav) fav.href = document.documentElement.classList.contains("dark")
      ? "e-dark-2025.svg"
      : "e-light-2025.svg";
    }
    localStorage.setItem(KEY, mode);
  }

  const saved = localStorage.getItem(KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved ? saved : (prefersDark ? "dark" : "light"));

  const btn = document.getElementById("themeToggle");
  if (btn){
    btn.addEventListener("click", () => {
      apply(root.classList.contains("dark") ? "light" : "dark");
    });
  }
})();
