import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          AK<span className="text-indigo-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 px-5 py-4 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-indigo-500 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;