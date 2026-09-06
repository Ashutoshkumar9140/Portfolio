import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import ProjectVideo from "./ProjectVideo";

function ProjectDetails({ project, showDetails, setShowDetails, onClose }) {
  useEffect(() => {
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
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 px-4 py-6 sm:px-6 sm:py-10"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-950"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <h3 className="font-semibold">{project.title}</h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
          >
            <X size={21} />
          </button>
        </div>

        <div className="p-5 sm:p-7">
          <ProjectVideo video={project.video} />

          {!showDetails && (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="mt-5 w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              View More
            </button>
          )}

          {showDetails && (
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Project Details
              </p>

              <h4 className="mt-2 text-2xl font-bold">{project.title}</h4>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-8">
                <h5 className="text-lg font-semibold">What is this project?</h5>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {project.whatIsIt}
                </p>
              </div>

              <div className="mt-8">
                <h5 className="text-lg font-semibold">Key Features</h5>

                <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-indigo-500">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h5 className="text-lg font-semibold">Technologies Used</h5>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h5 className="text-lg font-semibold">My Work</h5>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {project.myWork}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-900"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;