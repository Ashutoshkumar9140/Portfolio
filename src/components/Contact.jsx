import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:p-14 dark:border-slate-800 dark:bg-slate-900">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Contact
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let's build something together.
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              I'm open to frontend opportunities, interesting projects and
              conversations about web development.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:ashotoshraj.9628732@gamil.com"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-950"
            >
              <Mail size={19} className="text-indigo-500" />
              <span className="break-all text-sm">Email</span>
            </a>

            <a
              href="tel:9140338768"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-950"
            >
              <Phone size={19} className="text-indigo-500" />
              <span className="text-sm">Phone</span>
            </a>

            <a
              href="https://github.com/Ashutoshkumar9140"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-950"
            >
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-950"
            >
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;