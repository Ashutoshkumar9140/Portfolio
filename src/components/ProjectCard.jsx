import { useEffect, useState } from "react";

function ProjectCard({ project, onOpen }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isMajorProject = project.images && project.images.length > 0;

  useEffect(() => {
    if (!isMajorProject || project.images.length < 2) return;

    // ................ Change the preview image automatically ................

    const timer = setInterval(
      () => setCurrentImage((current) => (current + 1) % project.images.length),
      2200
    );

    return () => clearInterval(timer);
  }, [isMajorProject, project.images]);

  function handlePlayVideo(event) {
    event.stopPropagation();
    onOpen(project, false);
  }

  function handleViewDetails(event) {
    event.stopPropagation();
    onOpen(project, true);
  }

  function handleGithub(event) {
    event.stopPropagation();
    window.open(project.github, "_blank", "noopener,noreferrer");
  }

  function handleLiveDemo(event) {
    event.stopPropagation();
    window.open(project.live, "_blank", "noopener,noreferrer");
  }

  return (
    <article
      onClick={() => onOpen(project, true)}
      className={`dark:hover:border-amber-600 hover:-translate-y-1 border border-slate-300/80
      group bg-slate-50 overflow-hidden rounded-2xl hover:border-indigo-400
      dark:border-zinc-700 cursor-pointer shadow-sm hover:shadow-xl dark:bg-zinc-900
      duration-300 transition`}
    >
      {isMajorProject ? (
        <div className="aspect-video overflow-hidden relative bg-slate-800">
          {project.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} preview ${index + 1}`}
              className={`w-full h-full absolute object-cover ease-in-out inset-0
              duration-1000 transition-opacity
              ${index === currentImage ? "opacity-100" : "opacity-0"}`}
            />
          ))}

          <div
            className="inset-0 bg-black/15 transition group-hover:bg-black/25 absolute"
          />

          <button
            type="button"
            onClick={handlePlayVideo}
            className="transition absolute left-4 backdrop-blur-sm hover:bg-green-500
            py-2.5 bg-green-600 hover:scale-105 shadow-lg text-white focus:outline-none
            focus:ring-green-300 px-4 rounded-xl focus:ring-2 bottom-4 text-sm
            border border-green-300 font-bold"
          >
            ▶ Play Video
          </button>
        </div>
      ) : null}

      <div className="p-5 sm:p-6">
        <h4 className="dark:text-white text-slate-950 font-bold text-xl">
          {project.title}
        </h4>

        <p className="dark:text-zinc-300 mt-3 leading-6 text-slate-700 text-sm">
          {project.shortDescription}
        </p>

        <div className="mt-5">
          <p
            className="text-indigo-600 uppercase dark:text-amber-400 font-bold text-xs
            tracking-wider"
          >
            Skills Used
          </p>

          <div className="gap-2 flex-wrap mt-3 flex">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-xs dark:text-zinc-400 text-slate-600 py-0.5
                px-1 font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-2.5 mt-6">
          <button
            type="button"
            onClick={handleViewDetails}
            className="focus:ring-2 rounded-lg w-full border-blue-300 text-white focus:ring-blue-300 dark:hover:bg-zinc-600
            hover:bg-blue-400 shadow-sm py-2.5 hover:shadow-md dark:bg-zinc-700 focus:outline-none transition
            dark:border-zinc-500 text-sm bg-blue-500 px-4 border hover:-translate-y-0.5 font-bold"
          >
            View More
          </button>

          {project.github && (
            <button
              type="button"
              onClick={handleGithub}
              className="py-2.5 border-slate-300 focus:ring-slate-400 w-full
              dark:border-zinc-500 focus:ring-2 hover:-translate-y-0.5 dark:bg-zinc-700
              hover:shadow-md border transition hover:bg-slate-500 dark:hover:bg-zinc-600
              px-4 font-bold bg-slate-600 shadow-sm rounded-lg text-white
              focus:outline-none text-sm"
            >
              GitHub
            </button>
          )}

          {isMajorProject && project.live && (
            <button
              type="button"
              onClick={handleLiveDemo}
              className="sm:col-span-2 hover:-translate-y-0.5 py-2.5 hover:shadow-xl
              rounded-lg focus:outline-none bg-cyan-400 w-full shadow-lg
              focus:ring-cyan-300 focus:ring-2 border-cyan-300 text-slate-950
              font-extrabold px-4 text-sm transition hover:bg-cyan-300 border"
            >
              Live Demo
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;