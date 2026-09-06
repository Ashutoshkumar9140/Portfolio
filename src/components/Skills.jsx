import { Code2, Layout, Wrench } from "lucide-react";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            Technologies and tools I use while building frontend projects.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <Layout size={24} className="text-indigo-500" />

            <h3 className="mt-5 text-lg font-semibold">Frontend</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <Code2 size={24} className="text-indigo-500" />

            <h3 className="mt-5 text-lg font-semibold">React & Web</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.react.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <Wrench size={24} className="text-indigo-500" />

            <h3 className="mt-5 text-lg font-semibold">Tools</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-white px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;