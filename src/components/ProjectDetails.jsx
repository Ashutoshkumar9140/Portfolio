import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import ProjectVideo from "./ProjectVideo";

function ProjectDetails({ project, showDetails, setShowDetails, onClose }) {
  const isMajorProject =
    project.video && project.images && project.images.length > 0;

  useEffect(() => {
    // ................. Close the modal with the Escape key .................

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="sm:py-10 sm:px-6 inset-0 px-4 fixed overflow-y-auto bg-black/70
      z-50 py-6"
      onClick={onClose}
    >
      <div
        className="rounded-2xl shadow-2xl max-w-4xl bg-white border-slate-200
        dark:bg-zinc-950 overflow-hidden dark:border-zinc-800 border mx-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="px-5 justify-between border-b border-slate-200 flex-wrap
          dark:border-zinc-800 py-4 flex items-center gap-4"
        >
          <div className="min-w-0 gap-3 flex flex-wrap items-center">
            <h3 className="text-lg dark:text-white text-slate-900 font-bold">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="px-3 dark:bg-zinc-700 py-1.5 text-xs dark:hover:bg-zinc-600
                  bg-slate-600 transition border dark:border-zinc-500 rounded-md
                  text-white font-bold border-slate-300 hover:bg-slate-500"
                >
                  GitHub
                </a>
              )}

              {isMajorProject && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="shadow-lg px-3 dark:hover:bg-cyan-300 hover:bg-cyan-300
                  dark:bg-cyan-400 py-1.5 border text-slate-950 font-extrabold
                  bg-cyan-400 dark:border-cyan-300 transition border-cyan-300
                  text-xs rounded-md"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="dark:hover:bg-zinc-900 shrink-0 flex rounded-lg hover:text-slate-900
            hover:bg-slate-100 w-10 text-slate-500 justify-center dark:hover:text-zinc-50
            transition h-10 items-center"
          >
            <FiX size={21} />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {isMajorProject && <ProjectVideo video={project.video} />}

          {!showDetails && (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="dark:bg-zinc-700 border py-3 w-full bg-blue-600 font-bold px-5
              text-sm hover:-translate-y-0.5 shadow-sm dark:hover:bg-zinc-600 mt-5
              text-white dark:border-zinc-500 hover:bg-blue-500 hover:shadow-md
              border-blue-400 transition rounded-lg"
            >
              View More
            </button>
          )}

          {showDetails && (
            <div className={isMajorProject ? "mt-8" : ""}>
              <p
                className="dark:text-amber-400 tracking-widest text-sm font-semibold
                uppercase text-indigo-500"
              >
                Project Details
              </p>

              <p className="leading-7 text-slate-600 dark:text-zinc-300 mt-4">
                {project.description}
              </p>

              <div className="mt-8">
                <h5 className="font-semibold text-slate-900 text-lg dark:text-white">
                  What is this project?
                </h5>

                <p className="leading-7 mt-3 text-slate-600 dark:text-zinc-300">
                  {project.whatIsIt}
                </p>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold text-slate-900 text-lg dark:text-white">
                  Key Features
                </h5>

                <ul className="text-slate-600 dark:text-zinc-300 mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-indigo-500 dark:text-amber-400">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold text-slate-900 text-lg dark:text-white">
                  Technologies Used
                </h5>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="font-semibold rounded-md dark:border-zinc-700 text-sm
                      bg-violet-100 py-2 border-violet-300 dark:text-zinc-200 border
                      px-3 dark:bg-zinc-900 text-violet-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h5 className="font-semibold text-slate-900 text-lg dark:text-white">
                  My Work
                </h5>

                <p className="leading-7 mt-3 text-slate-600 dark:text-zinc-300">
                  {project.myWork}
                </p>
              </div>

              <div className="gap-3 flex-wrap mt-8 flex">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shadow-sm rounded-lg py-3 dark:bg-zinc-700 border font-bold
                    hover:shadow-md px-4 focus:ring-slate-400 transition focus:ring-2
                    hover:bg-slate-500 bg-slate-600 focus:outline-none dark:hover:bg-zinc-600
                    text-white hover:-translate-y-0.5 dark:border-zinc-500 text-sm
                    border-slate-300"
                  >
                    GitHub
                  </a>
                )}

                {isMajorProject && project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-400 font-extrabold transition text-slate-950 focus:outline-none
                    focus:ring-cyan-300 border-cyan-300 focus:ring-2 rounded-lg shadow-lg
                    text-sm hover:shadow-xl hover:-translate-y-0.5 border px-4 py-3
                    hover:bg-cyan-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
