import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  function openProject(project, details = false) {
    setSelectedProject(project);
    setShowDetails(details);
  }

  function closeProject() {
    setSelectedProject(null);
    setShowDetails(false);
  }

  return (
    <section
      id="projects"
      className="dark:bg-zinc-950 dark:border-zinc-800 bg-indigo-100/50
      border-b border-slate-300/80"
    >
      <div className="py-20 max-w-7xl lg:px-10 lg:py-24 sm:px-8 px-5 mx-auto">
        <div className="max-w-2xl">
          <p
            className="sm:text-lg tracking-widest text-base dark:text-amber-400
            text-indigo-700 uppercase font-extrabold mb-3"
          >
            Projects
          </p>

          <h2 className="text-slate-950 sm:text-5xl font-bold tracking-tight dark:text-white text-4xl">
            Things I've built
          </h2>

          <p className="text-slate-600 mt-5 dark:text-zinc-300">
            A collection of major applications and smaller projects I've built
            while developing my frontend development skills.
          </p>
        </div>

        <ProjectSection
          title="Major Projects"
          projects={projects.major}
          onOpen={openProject}
        />

        <ProjectSection
          title="React Mini Projects"
          projects={projects.react}
          onOpen={openProject}
        />

        <ProjectSection
          title="HTML / CSS / JavaScript Projects"
          projects={projects.javascript}
          onOpen={openProject}
        />
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          onClose={closeProject}
        />
      )}
    </section>
  );
}

function ProjectSection({ title, projects, onOpen }) {
  return (
    <div className="mt-14">
      <h3
        className="font-extrabold sm:text-3xl text-2xl text-slate-950
        dark:text-white"
      >
        {title}
      </h3>

      {projects.length > 0 ? (
        <div className="sm:grid-cols-2 gap-6 lg:grid-cols-3 grid mt-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpen}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm mt-5 text-slate-500 dark:text-zinc-400">
          Projects will be added here.
        </p>
      )}
    </div>
  );
}

export default Projects;