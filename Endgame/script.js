// Simple theme toggle with localStorage persistence
(function () {
  const el = document.documentElement;
  const STORAGE_KEY = "endgame-theme";
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "dark") el.classList.add("dark");

  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    el.classList.toggle("dark");
    const mode = el.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem(STORAGE_KEY, mode);
  });
})();
