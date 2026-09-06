function About() {
  return (
    <section id="about" className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building things while continuously improving.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            I'm a frontend developer focused on building responsive and
            practical web applications. My main focus is JavaScript and React,
            and I enjoy learning by building real projects rather than only
            following tutorials.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Over time, I've worked on dashboards, management applications,
            API-based projects and smaller frontend experiments. Each project
            has helped me understand how to structure interfaces, handle data
            and create better user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;