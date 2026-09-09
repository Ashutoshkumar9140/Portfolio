import { FiCode, FiLayout, FiTool } from "react-icons/fi";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills"
      className="border-slate-300/80 dark:bg-zinc-950 dark:border-zinc-800 bg-slate-200/70 border-b">
      <div className="mx-auto px-5 sm:px-8 lg:px-10 py-20 max-w-7xl lg:py-24">
        <div className="max-w-2xl">
          <p
            className="sm:text-lg text-base dark:text-amber-400 tracking-widest uppercase mb-3 font-extrabold text-indigo-700">
            Skills
          </p>

          <h2 className="tracking-tight sm:text-5xl font-bold text-4xl dark:text-white text-slate-950">
            Technologies I work with
          </h2>

          <p className="dark:text-zinc-300 text-slate-600 mt-5">
            Technologies and tools I use while building frontend projects.
          </p>
        </div>

        <div className="gap-5 md:grid-cols-3 mt-12 grid">
          <div
            className="dark:bg-zinc-900 border-slate-200 border rounded-2xl p-6 dark:border-zinc-800 bg-slate-300/60">
            <FiLayout size={24} className="text-indigo-500" />

            <h3 className="mt-5 font-semibold text-lg">Frontend</h3>

            <div className="mt-5 gap-2 flex-wrap flex">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="text-slate-600 dark:text-zinc-300 bg-white px-3 py-2 text-sm rounded-md dark:bg-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className="dark:bg-zinc-900 border-slate-200 border rounded-2xl p-6 dark:border-zinc-800 bg-slate-300/60">
            <FiCode size={24} className="text-indigo-500" />

            <h3 className="mt-5 font-semibold text-lg">React & Web</h3>

            <div className="mt-5 gap-2 flex-wrap flex">
              {skills.react.map((skill) => (
                <span
                  key={skill}
                  className="text-slate-600 dark:text-zinc-300 bg-white px-3 py-2 text-sm rounded-md dark:bg-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className="dark:bg-zinc-900 border-slate-200 border rounded-2xl p-6 dark:border-zinc-800 bg-slate-300/60">
            <FiTool size={24} className="text-indigo-500" />

            <h3 className="mt-5 font-semibold text-lg">Tools</h3>

            <div className="mt-5 gap-2 flex-wrap flex">
              {skills.tools.map((skill) => (
                <span
                  key={skill}
                  className="text-slate-600 dark:text-zinc-300 bg-white px-3 py-2 text-sm rounded-md dark:bg-zinc-800"
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
