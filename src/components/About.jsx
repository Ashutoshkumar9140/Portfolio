function About() {
  return (
    <section
      id="about"
      className="dark:bg-zinc-900 dark:border-zinc-800 bg-indigo-100/55 border-slate-300/80 border-b"
    >
      <div className="py-20 lg:py-24 mx-auto lg:px-10 px-5 max-w-7xl sm:px-8">
        <div className="max-w-3xl">
          <p className="tracking-widest uppercase mb-3 dark:text-amber-400 text-base sm:text-lg text-indigo-700 font-extrabold">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
            Building things while continuously improving.
          </h2>

          <p className="text-base mt-6 text-slate-600 dark:text-zinc-300 leading-8">
            I'm a frontend developer focused on building responsive and
            practical web applications. My main focus is JavaScript and React,
            and I enjoy learning by building real projects rather than only
            following tutorials.
          </p>

          <p className="leading-8 text-slate-600 text-base dark:text-zinc-300 mt-4">
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
