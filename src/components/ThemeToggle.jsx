import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  function toggleTheme() {
    setIsDark(!isDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-md transition hover:scale-105 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}

export default ThemeToggle;