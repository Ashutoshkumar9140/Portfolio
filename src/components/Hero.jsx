import { ArrowRight, Download, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Frontend Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm Ashutosh Kumar.
            <span className="mt-2 block text-slate-500 dark:text-slate-400">
              I build modern web experiences with React.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            I enjoy turning ideas into responsive, interactive and user-friendly
            web applications using JavaScript, React and modern frontend tools.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              View Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Ashutosh-Kumar-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/Ashutoshkumar9140"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ashotoshraj.9628732@gamil.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
            >
              <Mail size={17} />
              Email
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 shadow-xl sm:h-96 sm:w-96 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-indigo-600 text-5xl font-bold text-white shadow-lg sm:h-52 sm:w-52 sm:text-6xl">
              AK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;