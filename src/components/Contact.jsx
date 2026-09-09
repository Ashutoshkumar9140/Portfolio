import { FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-amber-50/70 dark:bg-zinc-950">
      <div className="mx-auto lg:py-24 py-20 px-4 lg:px-10 sm:px-6 max-w-7xl">
        <div
          className="rounded-3xl lg:p-14 dark:border-zinc-800 border-amber-200
          shadow-sm bg-white/75 dark:bg-zinc-900/75 p-6 border sm:p-10"
        >
          <div className="max-w-2xl">
            <p
              className="text-indigo-600 text-base dark:text-amber-400 mb-3
              sm:text-lg font-extrabold tracking-widest uppercase"
            >
              Contact
            </p>

            <h2
              className="tracking-tight text-3xl font-bold sm:text-4xl
              dark:text-white text-slate-950 lg:text-5xl"
            >
              Let's build something together.
            </h2>

            <p className="dark:text-zinc-300 text-slate-700 leading-7 mt-5">
              I'm open to frontend opportunities, interesting projects and
              conversations about web development.
            </p>
          </div>

          <div className="lg:grid-cols-4 grid mt-10 gap-4 sm:grid-cols-2">
            <a
              href="mailto:ashutoshraj.9628732@gmail.com"
              className="font-medium hover:-translate-y-1 dark:bg-zinc-900/80
              items-center dark:border-zinc-700 rounded-2xl shadow-sm duration-300
              dark:hover:bg-zinc-900 dark:hover:shadow-black/30 group gap-3 min-w-0
              text-slate-800 hover:bg-white transition border bg-slate-50/80 flex
              border-slate-300/80 hover:shadow-lg p-4 hover:border-indigo-400
              dark:text-zinc-200 dark:hover:border-amber-500"
            >
              <FiMail
                size={19}
                className="duration-300 shrink-0 text-indigo-600
                transition-transform dark:text-amber-400 group-hover:scale-110"
              />

              <span className="break-all text-sm">
                ashutoshraj.9628732@gmail.com
              </span>
            </a>

            <a
              href="tel:9140338768"
              className="p-4 dark:hover:bg-zinc-900 dark:hover:border-amber-500
              flex hover:border-indigo-400 dark:text-zinc-200 items-center
              shadow-sm border-slate-300/80 text-slate-800 hover:shadow-lg
              bg-slate-50/80 dark:bg-zinc-900/80 font-medium duration-300
              border hover:-translate-y-1 hover:bg-white transition
              dark:hover:shadow-black/30 dark:border-zinc-700 gap-3 group rounded-2xl"
            >
              <FiPhone
                size={19}
                className="duration-300 shrink-0 text-indigo-600
                transition-transform dark:text-amber-400 group-hover:scale-110"
              />

              <span className="text-sm">9140338768</span>
            </a>

            <a
              href="https://github.com/Ashutoshkumar9140"
              target="_blank"
              rel="noreferrer"
              className="p-4 dark:hover:bg-zinc-900 dark:hover:border-amber-500
              flex hover:border-indigo-400 dark:text-zinc-200 items-center
              shadow-sm border-slate-300/80 text-slate-800 hover:shadow-lg
              bg-slate-50/80 dark:bg-zinc-900/80 font-medium duration-300
              border hover:-translate-y-1 hover:bg-white transition
              dark:hover:shadow-black/30 dark:border-zinc-700 gap-3 group rounded-2xl"
            >
              <FaGithub
                size={19}
                className="duration-300 shrink-0 text-indigo-600
                transition-transform dark:text-amber-400 group-hover:scale-110"
              />

              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ashutosh-kumar-1b047a236"
              target="_blank"
              rel="noreferrer"
              className="p-4 dark:hover:bg-zinc-900 dark:hover:border-amber-500
              flex hover:border-indigo-400 dark:text-zinc-200 items-center
              shadow-sm border-slate-300/80 text-slate-800 hover:shadow-lg
              bg-slate-50/80 dark:bg-zinc-900/80 font-medium duration-300
              border hover:-translate-y-1 hover:bg-white transition
              dark:hover:shadow-black/30 dark:border-zinc-700 gap-3 group rounded-2xl"
            >
              <FaLinkedinIn
                size={19}
                className="duration-300 shrink-0 text-indigo-600
                transition-transform dark:text-amber-400 group-hover:scale-110"
              />

              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
