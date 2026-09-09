import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="bg-white/90 sticky border-slate-200/80 z-40 top-0 dark:bg-zinc-950/90
      border-b dark:border-zinc-800 backdrop-blur-md"
    >
      <nav className="justify-between px-5 max-w-7xl sm:px-8 items-center lg:px-10 py-4 mx-auto flex">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold dark:text-white text-slate-900 tracking-tight"
        >
          AK<span className="text-indigo-500">.</span>
        </a>

        <div className="items-center hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-500 transition font-medium dark:hover:text-amber-400
              text-sm dark:text-zinc-300 text-slate-600"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="font-medium dark:border-zinc-700 h-10 text-lg text-slate-700 items-center border md:hidden
          hover:bg-slate-100 flex dark:text-zinc-200 justify-center rounded-lg dark:hover:bg-zinc-800
          w-10 border-slate-200 transition"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="py-4 md:hidden dark:border-zinc-800 px-5 border-t
          border-slate-200"
        >
          <div className="gap-2 flex-col flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="dark:hover:bg-zinc-900 font-medium transition text-sm hover:text-indigo-500
                hover:bg-slate-100 text-slate-700 py-3 px-4 rounded-lg dark:text-zinc-200"
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