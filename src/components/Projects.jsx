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
    <section id="projects" className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things I've built
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            A collection of major applications, React projects and JavaScript
            projects I've built while developing my frontend skills.
          </p>
        </div>

        <ProjectSection
          title="Major Projects"
          projects={projects.major}
          onOpen={openProject}
        />

        <ProjectSection
          title="React Projects"
          projects={projects.react}
          onOpen={openProject}
        />

        <ProjectSection
          title="JavaScript Projects"
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
      <h3 className="text-xl font-bold sm:text-2xl">{title}</h3>

      {projects.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpen}
            />
          ))}
        </div>
      ) : (
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
          Projects will be added here.
        </p>
      )}
    </div>
  );
}

export default Projects;