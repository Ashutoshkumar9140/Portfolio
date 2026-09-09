function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 dark:bg-zinc-950 border-slate-300 bg-slate-200">
      <div
        className={`max-w-7xl flex-col dark:text-zinc-400 text-sm md:items-center md:justify-between gap-3 px-5 mx-auto
        lg:px-10 md:flex-row text-slate-500 sm:px-8 py-7 flex`}
      >
        <p>© {new Date().getFullYear()} Ashutosh Kumar</p>

        <p>Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
