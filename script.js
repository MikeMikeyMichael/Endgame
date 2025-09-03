(function () {
  const KEY = "endgame-theme";
  const root = document.documentElement;

  function setAssets(mode) {
    // theme class
    root.classList.toggle("dark", mode === "dark");
    // logo swap
    const logo = document.getElementById("logo");
    if (logo) logo.src = mode === "dark" ? logo.dataset.dark : logo.dataset.light;
    // favicon swap (filenames must exist in repo root)
    const fav = document.getElementById("favicon");
    if (fav) fav.href = mode === "dark" ? "e-dark-2025.svg" : "e-light-2025.svg";
    // persist
    try { localStorage.setItem(KEY, mode); } catch {}
  }

  function init() {
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setAssets(initial);

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const next = root.classList.contains("dark") ? "light" : "dark";
        setAssets(next);
      }, { passive: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
