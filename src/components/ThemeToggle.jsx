import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

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
      className="border-slate-300 dark:border-zinc-700 dark:text-zinc-200 shadow-md
      transition h-11 bottom-5 text-slate-700 border z-50 hover:scale-105
      justify-center bg-white hover:bg-slate-100 fixed right-5 dark:hover:bg-zinc-800
      rounded-full items-center flex w-11 dark:bg-zinc-900"
    >
      {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
    </button>
  );
}

export default ThemeToggle;