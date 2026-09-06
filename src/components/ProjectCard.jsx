import { useEffect, useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";

function ProjectCard({ project, onOpen }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((current) => {
        return (current + 1) % project.images.length;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [project.images]);

  function handleWatchDemo(event) {
    event.stopPropagation();
    onOpen(project, false);
  }

  function handleViewDetails(event) {
    event.stopPropagation();
    onOpen(project, true);
  }

  return (
    <article
      onClick={() => onOpen(project, true)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.images?.[currentImage]}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

        <button
          type="button"
          onClick={handleWatchDemo}
          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
        >
          <Play size={15} />
          Watch Demo
        </button>

        <div className="absolute right-4 top-4 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white">
          {currentImage + 1}/{project.images?.length || 0}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-bold">{project.title}</h4>
          <ArrowUpRight
            size={19}
            className="mt-1 shrink-0 text-slate-400 transition group-hover:text-indigo-500"
          />
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={handleViewDetails}
          className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
        >
          View More →
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;