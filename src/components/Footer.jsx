function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Ashutosh Kumar</p>

        <p>Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;